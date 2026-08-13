import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type Props = {
  item: ContentItem;
  lastArticles?: ContentItem[];
};

export default function FeaturedArticle({ item, lastArticles = [] }: Props) {
  const allArticles = [item, ...lastArticles]
    .filter((article) => article.metadata?.date)
    .sort(
      (a, b) =>
        new Date(b.metadata.date!).getTime() -
        new Date(a.metadata.date!).getTime(),
    );

  const latestArticle = allArticles[0];

  if (!latestArticle) return null;

  const { title, description, category, readingTime } = latestArticle.metadata;

  const latestArticles = allArticles
    .filter((article) => article.slug !== latestArticle.slug)
    .slice(0, 3);

  return (
    <section className="mt-32 border-t border-foreground/15 pt-6">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        {/* Label */}
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            From the Journal
          </p>
        </div>

        {/* Latest article */}
        <div className="md:col-span-6">
          <Link
            href={`/resources/${latestArticle.slug}`}
            className="group block"
          >
            <p className="font-mono text-xs text-muted-foreground">01</p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.95] tracking-tight md:text-6xl">
              {title}
            </h2>

            {description && (
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            )}

            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.12em]">
              {category && <span>{category}</span>}

              {readingTime && (
                <>
                  <span className="text-muted-foreground">·</span>

                  <span className="text-muted-foreground">
                    {readingTime} min read
                  </span>
                </>
              )}

              <span className="ml-auto text-lg text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        </div>

        {/* Previous articles */}
        {latestArticles.length > 0 && (
          <div className="md:col-span-6 md:col-start-5">
            <div className="mt-12 grid gap-x-4 gap-y-10 border-t border-foreground/15 pt-6 md:grid-cols-3">
              {latestArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group block"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 font-serif text-xl leading-[1] tracking-tight">
                    {article.metadata.title}
                  </h3>

                  {article.metadata.description && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {article.metadata.description}
                    </p>
                  )}

                  {article.metadata.category && (
                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {article.metadata.category}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
