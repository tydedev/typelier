import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleImage from "@/components/mdx/ArticleImage";
import BookPreview from "@/components/preview/BookPreview";
import { Separator } from "@/components/ui/separator";
import { getContent, getTranslatedPathnames, getContents } from "@/lib/content";
import FormatDate from "@/components/FormatDate";
import { SyncTranslatedPathnames } from "@/components/SyncTranslatedPathnames";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { cinzel, lora } from "@/lib/fonts";
import { routing } from "@/i18n/routing";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import ArticleFooter from "@/components/resources/ArticleFooter";

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

  const url = `${SITE_URL}/${locale}/resources/${slug}`;

  return {
    title: resource.metadata.title,
    description: resource.metadata.description,

    alternates: {
      canonical: url,
      languages,
    },

    openGraph: {
      type: "article",
      url,
      title: resource.metadata.title,
      description: resource.metadata.description,
      siteName: "Typelier",
      locale: locale === "it" ? "it_IT" : "en_US",
      publishedTime: resource.metadata.date,
    },

    twitter: {
      card: "summary_large_image",
      title: resource.metadata.title,
      description: resource.metadata.description,
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

  const url = `${SITE_URL}/${locale}/resources/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.metadata.title,
    description: resource.metadata.description,
    datePublished: resource.metadata.date,
    author: {
      "@type": "Organization",
      name: "Typelier",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Typelier",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <main className="bg-[#FCFBF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

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
        {resource.metadata.image && (
          <div className="relative mb-20 aspect-[16/9] w-full overflow-hidden">
            <Image
              src={resource.metadata.image}
              alt={resource.metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="
            font-serif
            prose
            prose-neutral
            max-w-none

            prose-headings:font-heading
            prose-headings:text-neutral-900
            prose-heading:text-xl
            prose-headings:font-medium

            prose-h2:mt-20
            prose-h2:text-2xl
            prose-h2:md:text-3xl

            prose-h3:mt-16
            prose-h3:text-xl
            prose-h3:md:text-2xl

            prose-p:mx-0
            prose-p:m-1
            prose-p:leading-normal
            prose-p:text-sm
            prose-p:md:text-base
            prose-li:text-sm
            prose-li:md:text-base

            prose-li:text-neutral-700
            prose-sup:text-xs
            prose-sup:font-medium
            [&_[data-footnotes]]:mt-16
            [&_[data-footnotes]]:border-t
            [&_[data-footnotes]]:pt-8
            
            /* Use ! to override .prose font sizing and margins */
            [&_[data-footnotes]_h2]:!text-base
            [&_[data-footnotes]_h2]:!mt-0
            [&_[data-footnotes]_h2]:!mb-2
            
            /* Target text sizing across lists and nested paragraphs */
            [&_[data-footnotes]_ol]:!mt-4
            [&_[data-footnotes]_li]:!text-sm
            [&_[data-footnotes]_p]:!text-sm
            [&_[data-footnotes]_p]:!leading-relaxed
            
            /* Target colors & utility elements */
            [&_[data-footnotes]_li]:!text-neutral-600
            [&_[data-footnotes]_li::marker]:!text-neutral-500
            [&_[data-footnotes]_a]:!text-neutral-700
            [&_[data-footnotes]_a]:!no-underline
            [&_[data-footnotes]_a:hover]:!underline
          "
        >
          <MDXRemote
            source={resource.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
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
        <ArticleFooter />
      </article>
    </main>
  );
}
