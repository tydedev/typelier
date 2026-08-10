import { ContentItem } from "@/lib/content";
import ProductCard from "./ProductCard";

type Props = {
  items: ContentItem[];
  title?: string;
};

const ProductList = ({ items }: Props) => {
  const sortedItems = [...items].sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return 0;

    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {sortedItems.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
