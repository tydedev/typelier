import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type Props = {
  item: ContentItem;
};

export default function FeaturedArticle({ item }: Props) {
  const { title, description, category, readingTime } = item.metadata;

  return (
    <section className="mt-32 border-t border-foreground/15 pt-6">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            From the Journal
          </p>
        </div>

        <div className="md:col-span-7">
          <Link href={`/resources/${item.slug}`} className="group block">
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
      </div>
    </section>
  );
}
