import { ContentItem } from "@/lib/content";
import ContentCard from "./ContentCard";
import SmallHeading from "../global/SmallHeading";

type Props = {
  items: ContentItem[];
  title?: string;
};

export default function ContentGrid({ items, title }: Props) {
  const sortedItems = [...items].sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return 0;

    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  return (
    <section>
      {title && <SmallHeading>{title}</SmallHeading>}

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          mt-10
        "
      >
        {sortedItems.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
