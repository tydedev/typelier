import { useTranslations } from "next-intl";
import Link from "next/link";

const Copyrights = () => {
  const t = useTranslations("Footer");
  return (
    <div className="col-span-full text-xs mt-10 flex flex-col md:flex-row md:justify-between gap-2">
      <p className="max-w-sm">
        &copy; {new Date().getFullYear()} Chapterly. {t("copyright")}
      </p>
      <p className="max-w-sm">
        {t("developer")}{" "}
        <Link
          href="https://tydedev.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tydedev
        </Link>
      </p>
    </div>
  );
};

export default Copyrights;
