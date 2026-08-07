import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "@/lib/content";
import FormatDate from "../FormatDate";

type Props = {
  item: ContentItem;
};

export default function ContentCard({ item }: Props) {
  const { metadata } = item;

  const href =
    metadata.type === "article"
      ? `/resources/${item.slug}`
      : `/shop/${item.slug}`;

  const action =
    metadata.type === "product"
      ? "View product →"
      : metadata.type === "freebie"
        ? "Download →"
        : "Read article →";

  return (
    <article
      className="
        group
        overflow-hidden
        border
        border-foreground/10
        bg-background
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {metadata.image && (
        <Link href={href}>
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={metadata.image}
              alt={metadata.title}
              width={600}
              height={450}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <span
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-foreground/50
            "
          >
            {metadata.category}
          </span>

          {metadata.type === "freebie" && (
            <span className="text-xs uppercase tracking-wider">Free</span>
          )}

          {metadata.type === "product" && metadata.price && (
            <span className="text-sm">${metadata.price}</span>
          )}
        </div>

        <h2
          className="
            mt-5
            font-serif
            text-3xl
            leading-tight
            text-foreground
          "
        >
          {metadata.title}
        </h2>

        <p
          className="
            mt-4
            text-sm
            leading-relaxed
            text-foreground/60
          "
        >
          {metadata.description}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-foreground/10
            pt-5
          "
        >
          <div
            className="
              flex
              gap-3
              text-xs
              text-foreground/50
            "
          >
            {metadata.date && (
              <span>
                <FormatDate date={metadata.date} />
              </span>
            )}
          </div>

          <Link
            href={href}
            className="
              text-sm
              font-medium
              transition
              group-hover:underline
            "
          >
            {action}
          </Link>
        </div>
      </div>
    </article>
  );
}
