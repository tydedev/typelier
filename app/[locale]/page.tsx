import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import InfoSection from "@/components/homepage/InfoSection";
import FeaturedArticle from "@/components/homepage/FeaturedArticle";
import ShopPreview from "@/components/homepage/ShopPreview";
import Featured from "@/components/library/Featured";
import { getContents } from "@/lib/content";
import { useLocale } from "next-intl";

function Home() {
  const locale = useLocale();

  const resources = getContents("resources", locale);
  const products = getContents("shop", locale);

  const featuredArticle = resources.find((item) => item.metadata.featured);

  const latestProducts = [...products]
    .filter((item) => item.metadata.date)
    .sort(
      (a, b) =>
        new Date(b.metadata.date!).getTime() -
        new Date(a.metadata.date!).getTime(),
    )
    .slice(0, 2);

  return (
    <>
      <Hero />

      <InfoSection />

      <HowItWorks />

      <Featured />

      {featuredArticle && <FeaturedArticle item={featuredArticle} />}

      {latestProducts.length > 0 && <ShopPreview items={latestProducts} />}
    </>
  );
}

export default Home;
