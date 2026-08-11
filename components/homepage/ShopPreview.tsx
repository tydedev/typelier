import Link from "next/link";
import Image from "next/image";
import type { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";

type Props = {
  items: ContentItem[];
};

export default function ShopPreview({ items }: Props) {
  const t = useTranslations("Shop");

  return (
    <section className="mt-32 border-t border-foreground/15 pt-6">
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Shop
        </p>

        <Link
          href="/shop"
          className="text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const { metadata } = item;

          return (
            <Link key={item.slug} href={`/shop/${item.slug}`} className="group">
              <div className="relative aspect-video overflow-hidden bg-neutral-50">
                {metadata.image && (
                  <Image
                    src={metadata.image}
                    alt={metadata.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                )}
              </div>

              <div className="mt-3 border-t border-foreground/15 pt-3">
                <div className="flex items-start gap-3">
                  <span className="pt-0.5 font-mono text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-lg leading-tight tracking-tight">
                        {metadata.title}
                      </h3>

                      <span className="shrink-0 text-xs">
                        {metadata.price === 0
                          ? t("free")
                          : `€${metadata.price}`}
                      </span>
                    </div>

                    {metadata.productType && (
                      <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {metadata.productType}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
