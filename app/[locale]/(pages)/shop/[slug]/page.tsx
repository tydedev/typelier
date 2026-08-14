import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleImage from "@/components/mdx/ArticleImage";
import DownloadButton from "@/components/mdx/DownloadButton";
import ProductTabs from "@/components/shop/ProductTabs";
import { Separator } from "@/components/ui/separator";
import { getContent, getContents, getTranslatedPathnames } from "@/lib/content";
import { SyncTranslatedPathnames } from "@/components/SyncTranslatedPathnames";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  const params = routing.locales.flatMap((locale) =>
    getContents("resources", locale).map((resource) => ({
      locale,
      slug: resource.slug,
    })),
  );
  console.log("STATIC PARAMS:", JSON.stringify(params, null, 2));
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const product = getContent("shop", locale, slug);

  if (!product) return {};

  const translatedPathnames = getTranslatedPathnames(
    "shop",
    product.metadata.id,
    ["it", "en"],
  );

  const languages: Record<string, string> = {};

  for (const [loc, pathname] of Object.entries(translatedPathnames)) {
    languages[loc] = `${SITE_URL}/${loc}${pathname}`;
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/shop/${slug}`,
      languages,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;

  const product = getContent("shop", locale, slug);

  if (!product) {
    notFound();
  }

  const translatedPathnames = getTranslatedPathnames(
    "shop",
    product.metadata.id,
    ["it", "en"],
  );

  const { metadata } = product;
  const isFree = metadata.price === 0;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SyncTranslatedPathnames pathnames={translatedPathnames} />

      {/* Product */}
      <article className="border-t border-foreground/15 pt-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          {/* Preview */}
          <div className="md:col-span-7">
            <Link
              href={metadata.url || "#"}
              target={metadata.url ? "_blank" : undefined}
              rel={metadata.url ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.035]">
                {metadata.image && (
                  <Image
                    src={metadata.image}
                    alt={metadata.title}
                    fill
                    priority
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center md:col-span-5">
            <div>
              {metadata.productType && (
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {metadata.productType}
                </p>
              )}

              <h1 className="mt-4 font-serif text-4xl leading-[0.95] tracking-tight md:text-5xl">
                {metadata.title}
              </h1>

              {metadata.description && (
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {metadata.description}
                </p>
              )}
            </div>

            <div className="mt-8 border-t border-foreground/15 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium">
                  {isFree ? "FREE" : `€${metadata.price}`}
                </span>

                {metadata.url && (
                  <Link
                    href={metadata.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-muted-foreground"
                  >
                    {isFree ? "Download" : "Buy now"} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Details */}
      <section className="mt-20 border-t border-foreground/15 pt-6 md:mt-28">
        <ProductTabs
          details={
            <div
              className="
                prose
                prose-neutral
                max-w-3xl

                prose-headings:font-serif
                prose-headings:font-normal
                prose-headings:tracking-tight

                prose-h2:mt-10
                prose-h2:text-3xl

                prose-p:leading-relaxed
                prose-p:text-foreground/80

                prose-li:text-foreground/80
              "
            >
              <MDXRemote
                source={product.content}
                components={{
                  ArticleImage,
                  Separator,
                  DownloadButton,
                }}
              />
            </div>
          }
          specifications={{
            format: metadata.format,
            size: metadata.size,
            pages: metadata.pages,
            productType: metadata.productType,
            printing: metadata.printing,
          }}
        />
      </section>
    </main>
  );
}
