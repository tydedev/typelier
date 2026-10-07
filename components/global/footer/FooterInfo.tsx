import { useTranslations } from "next-intl";

const FooterInfo = () => {
  const t = useTranslations("Footer");
  return (
    <div className="col-span-full md:col-span-4 text-sm align-baseline">
      <p>
        {" "}
        <span className="font-medium font-heading tracking-wider uppercase mb-2">
          {t("title")}
        </span>
      </p>
      {t("description")}
    </div>
  );
};

export default FooterInfo;
