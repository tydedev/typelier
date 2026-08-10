import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type Props = {
  items: ContentItem[];
  title?: string;
};

export default function ResourceList({
  items,
  title = "Latest Resources",
}: Props) {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
          {title}
        </h2>

        <span className="font-mono text-xs text-muted-foreground">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div>
        {items.map((item, index) => {
          const { title, description, category } = item.metadata;

          return (
            <Link
              key={item.slug}
              href={`/resources/${item.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-foreground/10 py-7 md:grid-cols-[4rem_1fr_auto] md:gap-6"
            >
              <span className="pt-1 font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                {category && (
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {category}
                  </p>
                )}

                <h3 className="max-w-2xl font-serif text-xl leading-tight tracking-tight md:text-2xl">
                  {title}
                </h3>

                {description && (
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>

              <span className="self-center text-xl text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
