import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";

type Props = {
  item: ContentItem;
};

export default function FeaturedContent({ item }: Props) {
  const { metadata } = item;
  const t = useTranslations("Common");

  const href =
    metadata.type === "article"
      ? `/resources/${item.slug}`
      : `/shop/${item.slug}`;

  return (
    <section className="border-t border-foreground/15 pt-5">
      <div className="mb-10 flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Last added
        </p>

        <span className="font-mono text-xs text-muted-foreground">01</span>
      </div>

      <Link href={href} className="group grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Content */}
        <div className="flex flex-col lg:col-span-5">
          <div>
            {metadata.category && (
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {metadata.category}
              </p>
            )}

            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              {metadata.title}
            </h1>

            {metadata.description && (
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                {metadata.description}
              </p>
            )}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-foreground/15 pt-5">
            <span className="text-xs font-medium uppercase tracking-[0.12em]">
              {metadata.type === "article"
                ? t("readArticle")
                : t("viewProduct")}
            </span>

            <span className="text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>

        {/* Image */}
        {metadata.image && (
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={metadata.image}
                alt={metadata.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        )}
      </Link>
    </section>
  );
}
