import Image from "next/image";
import { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  item: ContentItem;
};

export default function FeaturedArticle({ item }: Props) {
  const { metadata } = item;
  const t = useTranslations("Common");

  const href = metadata.type === "article" && `/resources/${item.slug}`;

  return (
    <section className="pb-10 border-b border-foreground/10">
      <div className="overflow-hidden aspect-video relative">
        <Link href={href || ""}>
          <Image
            src={metadata.image || ""}
            fill
            alt={metadata.title}
            className="object-cover hover:scale-105 transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
      <p className="text-base text-foreground/50 uppercase tracking-[0.2em] pt-5 pb-3">
        {metadata.category}
      </p>
      <h2 className="font-heading text-2xl md:text-4xl">
        <Link href={href || ""} className="hover:text-foreground/65">
          {metadata.title}
        </Link>
      </h2>
      <p className="text-lg text-foreground/70">{metadata.description}</p>
      {href && (
        <Button asChild className="font-medium text-md my-5">
          <Link href={href}>{t("readArticle")} &rarr;</Link>
        </Button>
      )}
    </section>
  );
}
