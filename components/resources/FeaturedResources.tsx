import Image from "next/image";
import Link from "next/link";
import type { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";

type Props = {
  items: ContentItem[];
};

export default function FeaturedResources({ items }: Props) {
  const first = items.find((item) => item.metadata.first);
  const second = items.find((item) => item.metadata.second);
  const t = useTranslations("Common");

  if (!first && !second) return null;

  const featuredCount = [first, second].filter(Boolean).length;

  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-foreground/15 pb-4">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Featured
        </p>

        <span className="font-mono text-xs text-muted-foreground">
          {String(featuredCount).padStart(2, "0")}
        </span>
      </div>

      <div className="grid gap-8 pt-8 md:grid-cols-[1.45fr_1fr] md:gap-10">
        {first && (
          <Link href={`/resources/${first.slug}`} className="group">
            {first.metadata.image && (
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={first.metadata.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}

            <div className="pt-6">
              {first.metadata.category && (
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {first.metadata.category}
                </p>
              )}

              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                {first.metadata.title}
              </h2>

              {first.metadata.description && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {first.metadata.description}
                </p>
              )}

              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
                {t("readArticle")}
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        )}

        {second && (
          <Link
            href={`/resources/${second.slug}`}
            className="group border-t border-foreground/15 pt-6 md:pt-0 md:border-l md:border-t-0 md:pl-8"
          >
            {second.metadata.image && (
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={second.metadata.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}

            <div className="pt-5">
              {second.metadata.category && (
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {second.metadata.category}
                </p>
              )}

              <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                {second.metadata.title}
              </h2>

              {second.metadata.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {second.metadata.description}
                </p>
              )}

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]">
                {t("readArticle")}
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
