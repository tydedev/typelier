import FeaturedProduct from "@/components/content/FeaturedProduct";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import InfoSection from "@/components/homepage/InfoSection";
import Featured from "@/components/library/Featured";
import { getContents } from "@/lib/content";
import { useLocale } from "next-intl";

function Home() {
  const locale = useLocale();
  const products = getContents("shop", locale);

  const featured = products.find((item) => item.metadata.featured);
  return (
    <>
      <Hero />
      <InfoSection />
      <HowItWorks />
      <Featured />
      {featured && <FeaturedProduct item={featured} />}
    </>
  );
}

export default Home;
