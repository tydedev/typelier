import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ContentItem } from "@/lib/content";

type Props = {
  item: ContentItem;
};

export default function ProductCard({ item }: Props) {
  const { metadata } = item;
  const t = useTranslations("Shop");

  return (
    <article className="group">
      <Link href={`/shop/${item.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          {metadata.image && (
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
          )}
        </div>

        <div className="mt-4 border-t border-foreground/15 pt-4">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h2 className="font-serif text-xl leading-tight tracking-tight transition-colors group-hover:text-foreground/65">
                {metadata.title}
              </h2>

              {metadata.productType && (
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {metadata.productType}
                </p>
              )}
            </div>

            <p className="shrink-0 text-sm font-medium">
              {metadata.price === 0 ? t("free") : `€${metadata.price}`}
            </p>
          </div>

          {metadata.description && (
            <p className="mt-3 line-clamp-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {metadata.description}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {metadata.price === 0 ? t("download") : t("buyNow")}
            </span>

            <span className="text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
