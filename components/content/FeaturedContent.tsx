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
    <section
      className="
        grid
        grid-cols-1
        gap-10
        lg:grid-cols-12
        items-center
      "
    >
      <div className="lg:col-span-6">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-foreground/50
          "
        >
          {metadata.category}
        </p>

        <h1
          className="
            mt-5
            font-serif
            text-3xl
            leading-tight
            md:text-4xl
          "
        >
          {metadata.title}
        </h1>
        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-foreground/60
          "
        >
          {metadata.description}
        </p>

        <Link
          href={href}
          className="
            mt-8
            inline-block
            text-sm
            font-medium
          "
        >
          {metadata.type === "article"
            ? `${t("readArticle")} →`
            : `${t("viewProduct")} →`}
        </Link>
      </div>

      {metadata.image && (
        <div
          className="
            lg:col-span-6
            overflow-hidden
          "
        >
          <Image
            src={metadata.image}
            alt={metadata.title}
            width={800}
            height={600}
            className="
              
              aspect-video
              w-full
              object-cover
            "
          />
        </div>
      )}
    </section>
  );
}
