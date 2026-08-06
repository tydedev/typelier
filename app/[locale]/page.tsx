import Donate from "@/components/donations/Donate";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import InfoSection from "@/components/homepage/InfoSection";
import Featured from "@/components/library/Featured";

function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <HowItWorks />
      <Featured />
    </>
  );
}

export default Home;
