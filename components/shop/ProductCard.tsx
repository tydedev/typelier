import { ContentItem } from "@/lib/content";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {
  item: ContentItem;
};

export default function ProductCard({ item }: Props) {
  const { metadata } = item;
  const t = useTranslations("Shop");

  return (
    <div className="bg-white p-3 relative">
      <Link href={`/shop/${item.slug}`}>
        <div className="relative h-[200px] w-[200px] shrink-0 overflow-hidden bg-neutral-100 mb-5 w-full">
          {metadata.image && (
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              className="object-contain hover:scale-105 transition-all duration-200 ease-in-out"
            />
          )}
        </div>
      </Link>

      <Link
        href={`/shop/${item.slug}`}
        className="font-medium text-md mb-1 hover:text-foreground/65"
      >
        {metadata.title}
      </Link>
      <p className="text-sm line-clamp-2">{metadata.description}</p>
      <p className="text-xs font-medium mt-2">{metadata.productType}</p>
      <p className="font-semibold py-2 text-xl">
        {metadata.price === 0 ? t("free") : `€${metadata.price}`}
      </p>
      <Button className="w-full" asChild>
        <Link href={`/shop/${item.slug}`}>
          {metadata.price === 0 ? t("download") : t("buyNow")}
        </Link>
      </Button>
    </div>
  );
}
