import Heading from "@/components/global/Heading";
import FeaturedContent from "@/components/content/FeaturedContent";
import { getContents } from "@/lib/content";
import ProductList from "@/components/shop/ProductList";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Resources({ params }: Props) {
  const { locale } = await params;

  const products = getContents("shop", locale);
  const featured = products.find((item) => item.metadata.featured);
  const latest = products.filter((item) => item.slug !== featured?.slug);

  return (
    <>
      <Heading>products</Heading>

      <div className="py-20 flex flex-col">
        <div className="">
          {featured && <FeaturedContent item={featured} />}
        </div>

        <div className="mt-24">
          <ProductList items={latest} title="Latest Products" />
        </div>
      </div>
    </>
  );
}
