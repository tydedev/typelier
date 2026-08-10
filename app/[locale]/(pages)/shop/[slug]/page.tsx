import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleImage from "@/components/mdx/ArticleImage";
import DownloadButton from "@/components/mdx/DownloadButton";
import ProductTabs from "@/components/shop/ProductTabs";
import { Separator } from "@/components/ui/separator";
import { getContent, getTranslatedPathnames } from "@/lib/content";
import { SyncTranslatedPathnames } from "@/components/SyncTranslatedPathnames";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const resource = getContent("shop", locale, slug);

  if (!resource) return {};

  const translatedPathnames = getTranslatedPathnames(
    "shop",
    resource.metadata.id,
    ["it", "en"],
  );

  const languages: Record<string, string> = {};

  for (const [loc, pathname] of Object.entries(translatedPathnames)) {
    languages[loc] = `${SITE_URL}/${loc}${pathname}`;
  }

  return {
    title: resource.metadata.title,
    description: resource.metadata.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/shop/${slug}`,
      languages,
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { locale, slug } = await params;

  const resource = getContent("shop", locale, slug);

  if (!resource) {
    notFound();
  }

  const translatedPathnames = getTranslatedPathnames(
    "shop",
    resource.metadata.id,
    ["it", "en"],
  );

  const isFree = resource.metadata.price === 0;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SyncTranslatedPathnames pathnames={translatedPathnames} />

      <article className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Preview */}
        <div className="flex min-h-[420px] items-center justify-center bg-foreground/5 p-8 md:min-h-[500px]">
          <div className="flex max-h-[420px] max-w-xl items-center justify-center">
            {/* Product preview */}
            {resource.metadata.image && (
              <Image
                width={500}
                height={500}
                src={resource.metadata.image}
                alt={resource.metadata.title}
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>

        {/* Product information */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
            {resource.metadata.category}
          </p>

          <h1
            className="
              font-heading
              text-3xl
              leading-tight
              text-neutral-900
              md:text-5xl
            "
          >
            {resource.metadata.title}
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-neutral-600
            "
          >
            {resource.metadata.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-2xl font-medium">
              {isFree ? "FREE" : `€${resource.metadata.price}`}
            </span>

            <Button size="lg" asChild>
              <Link href={resource.metadata.url || "#"} target="_blank">
                {isFree ? "Download" : "Buy now"}
              </Link>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <ProductTabs
          details={
            <div
              className="
                prose
                prose-neutral
                max-w-none

                prose-headings:font-heading
                prose-headings:text-neutral-900
                prose-headings:font-medium

                prose-h2:mt-12
                prose-h2:text-3xl

                prose-p:mx-0
                prose-p:m-1
                prose-p:leading-normal
                prose-p:text-base

                prose-li:text-neutral-700
              "
            >
              <MDXRemote
                source={resource.content}
                components={{
                  ArticleImage,
                  Separator,
                  DownloadButton,
                }}
              />
            </div>
          }
          specifications={{
            format: resource.metadata.format,
            size: resource.metadata.size,
            pages: resource.metadata.pages,
            productType: resource.metadata.productType,
            printing: resource.metadata.printing,
          }}
        />
      </article>
    </main>
  );
}
