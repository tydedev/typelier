import { Separator } from "../ui/separator";
import Copyrights from "./footer/Copyrights";
import FooterInfo from "./footer/FooterInfo";
import Navigation from "./footer/Navigation";

const Footer = () => {
  return (
    <footer className="px-6 md:px-24 max-w-360 w-full mx-auto mt-auto pt-30">
      <Separator className="mb-4" />
      <section className="grid grid-cols-12 gap-3 py-4 pb-10">
        <FooterInfo />
        <Navigation />
        <Copyrights />
      </section>
    </footer>
  );
};

export default Footer;
