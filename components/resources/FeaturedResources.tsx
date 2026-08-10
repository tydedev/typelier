import Image from "next/image";
import Link from "next/link";
import type { ContentItem } from "@/lib/content";

type Props = {
  items: ContentItem[];
};

export default function FeaturedResources({ items }: Props) {
  if (items.length === 0) return null;

  const primary = items[0];
  const secondary = items[1];

  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Featured
        </p>

        <span className="font-mono text-xs text-muted-foreground">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid gap-8 pt-8 md:grid-cols-[1.45fr_1fr] md:gap-10">
        <Link href={`/resources/${primary.slug}`} className="group">
          {primary.metadata.image && (
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={primary.metadata.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          )}

          <div className="pt-6">
            {primary.metadata.category && (
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {primary.metadata.category}
              </p>
            )}

            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
              {primary.metadata.title}
            </h2>

            {primary.metadata.description && (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {primary.metadata.description}
              </p>
            )}

            <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
              Read article
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </Link>

        {secondary && (
          <Link
            href={`/resources/${secondary.slug}`}
            className="group border-t border-foreground/15 pt-6 md:pt-0 md:border-l md:border-t-0 md:pl-8"
          >
            {secondary.metadata.image && (
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={secondary.metadata.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}

            <div className="pt-5">
              <div className="flex items-center justify-between gap-4">
                {secondary.metadata.category && (
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {secondary.metadata.category}
                  </p>
                )}
              </div>

              <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                {secondary.metadata.title}
              </h2>

              {secondary.metadata.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {secondary.metadata.description}
                </p>
              )}

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
                Read article
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
