import Link from "next/link";
import FeaturedProduct from "@/components/content/FeaturedProduct";
import type { ContentItem } from "@/lib/content";

type Props = {
  items: ContentItem[];
};

export default function ShopPreview({ items }: Props) {
  return (
    <section className="mt-32 border-t border-foreground/15 pt-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Shop
          </p>

          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            Templates & tools
          </h2>
        </div>

        <Link
          href="/shop"
          className="text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <FeaturedProduct key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
