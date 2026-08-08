import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Copyrights = () => {
  const t = useTranslations("Footer");
  return (
    <div className="col-span-full text-xs mt-10 flex flex-col md:flex-row md:justify-between gap-2">
      <p className="max-w-sm">
        &copy; {new Date().getFullYear()} Typelier. {t("copyright")}
      </p>
      <p className="max-w-sm flex items-center justify-center gap-x-1">
        {t("developer")}
        <Link
          href="https://tydedev.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tydedev
        </Link>
        <Button size="icon-sm" asChild>
          <Link href="https://www.instagram.com/tydedev/" target="_blank">
            <FaInstagram size={20} />
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default Copyrights;
