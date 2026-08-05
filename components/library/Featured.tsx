import pairings from "@/data/fontPairings";
import { useTranslations } from "next-intl";
import SmallHeading from "../global/SmallHeading";
import PairingList from "./PairingList";
import { Pairing } from "@/types/pairing";

const Featured = () => {
  const t = useTranslations("Library");
  const fontPairings = pairings;
  const featured = fontPairings.filter((pairing) => pairing.featured === true);

  return (
    <div>
      <SmallHeading>Featured</SmallHeading>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        <PairingList pairings={featured as Pairing[]} />
      </section>
    </div>
  );
};

export default Featured;
