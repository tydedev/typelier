import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleImage from "@/components/mdx/ArticleImage";
import BookPreview from "@/components/preview/BookPreview";
import { Separator } from "@/components/ui/separator";
import { getContent, getTranslatedPathnames } from "@/lib/content";
import FormatDate from "@/components/FormatDate";
import { SyncTranslatedPathnames } from "@/components/SyncTranslatedPathnames";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { cinzel, lora } from "@/lib/fonts";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

interface BookPreviewProps {
  headingFont: string;
  bodyFont: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const resource = getContent("resources", locale, slug);

  if (!resource) return {};

  const translatedPathnames = getTranslatedPathnames(
    "resources",
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
      canonical: `${SITE_URL}/${locale}/resources/${slug}`,
      languages,
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { locale, slug } = await params;

  const resource = getContent("resources", locale, slug);

  if (!resource) {
    notFound();
  }
  const translatedPathnames = getTranslatedPathnames(
    "resources",
    resource.metadata.id,
    ["it", "en"],
  );

  return (
    <main className="bg-[#FCFBF8]">
      <SyncTranslatedPathnames pathnames={translatedPathnames} />
      <article
        className="
          mx-auto
          md:max-w-3xl
          px-6
          py-24
        "
      >
        <header className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
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
              mx-auto
              mt-8
              text-sm
              max-w-xl
              md:text-lg
              leading-relaxed
              text-neutral-600
            "
          >
            {resource.metadata.description}
          </p>
          <Separator className="my-8" />
          <div className="flex items-center justify-between text-sm text-foreground/50">
            <p>
              {resource.metadata.date ? (
                <FormatDate date={resource.metadata.date} />
              ) : (
                ""
              )}
            </p>
            <p>{resource.metadata.readingTime} min.</p>
          </div>
        </header>

        <div
          className="
            prose
            prose-neutral
            max-w-none

            prose-headings:font-heading
            prose-headings:text-neutral-900
            prose-heading:text-xl
            prose-headings:font-medium

            prose-h2:mt-20
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
              BookPreview: (props: BookPreviewProps) => (
                <div className="not-prose flex justify-center">
                  <BookPreview
                    {...props}
                    headingFont={cinzel.className}
                    bodyFont={lora.className}
                    className="mt-10"
                  />
                </div>
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}
