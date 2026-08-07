import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import ArticleImage from "@/components/mdx/ArticleImage";
import { Separator } from "@/components/ui/separator";
import { getContent } from "@/lib/content";
import FormatDate from "@/components/FormatDate";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ResourcePage({ params }: Props) {
  const { locale, slug } = await params;

  const resource = getContent("shop", locale, slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="bg-[#FCFBF8]">
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
              md:text-6xl
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
            <p>{resource.metadata.readingTime}</p>
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
            }}
          />
        </div>
      </article>
    </main>
  );
}
