import Link from "next/link";
import type { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";

type Props = {
  items: ContentItem[];
  query: string;
};

export default function SearchResults({ items, query }: Props) {
  const t = useTranslations("Blog");
  return (
    <section>
      <div className="border-b border-foreground/15 pb-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {t("searchResults")}
            </p>

            {query && (
              <h2 className="mt-2 font-serif text-3xl tracking-tight">
                “{query}”
              </h2>
            )}
          </div>

          <span className="shrink-0 text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? "resource" : "resources"}
          </span>
        </div>
      </div>

      <div>
        {items.map((item, index) => {
          const { title, description, category } = item.metadata;

          return (
            <Link
              key={item.slug}
              href={`/resources/${item.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-foreground/10 py-7 transition-colors hover:bg-foreground/[0.02] md:grid-cols-[4rem_1fr_auto] md:gap-6"
            >
              <span className="pt-1 font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                {category && (
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {category}
                  </p>
                )}

                <h3 className="font-serif text-xl leading-tight tracking-tight transition-transform group-hover:translate-x-1 md:text-2xl">
                  {title}
                </h3>

                {description && (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>

              <span className="self-center text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
