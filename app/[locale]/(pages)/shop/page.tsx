import Heading from "@/components/global/Heading";
import FeaturedContent from "@/components/content/FeaturedContent";
import { getContents } from "@/lib/content";
import ProductList from "@/components/shop/ProductList";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Resources({ params }: Props) {
  const { locale } = await params;

  const products = getContents("shop", locale);

  const sortedProducts = [...products].sort(
    (a, b) =>
      new Date(b.metadata.date!).getTime() -
      new Date(a.metadata.date!).getTime(),
  );

  const latest = sortedProducts[0];
  const remaining = sortedProducts.slice(1);

  return (
    <>
      <div className="flex flex-col py-20">
        {latest && (
          <div>
            <FeaturedContent item={latest} />
          </div>
        )}

        {remaining.length > 0 && (
          <div className="mt-24">
            <Suspense fallback={null}>
              <ProductList items={remaining} title="Latest Products" />
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
}
