import { useTranslations } from "next-intl";
import React from "react";

const InfoSection = () => {
  const t = useTranslations("InfoSection");
  return (
    <section className="grid grid-cols-12 gap-3 py-18">
      <div className="col-span-full md:col-span-5">
        <h3 className="font-heading text-3xl md:text-4xl font-medium pb-4 text-foreground/70 mb-2">
          {t("question")}
        </h3>
        <div className="text-foreground/70 text-base md:text-lg font-body space-y-2">
          <p>{t("description")}</p>
          <p className="font-medium">{t("highlight")}</p>
        </div>
      </div>
      <div className="col-span-full md:col-span-6 md:col-start-7 flex flex-col justify-center items-center mt-20 md:mt-0">
        <blockquote className="relative text-foreground/70 text-center md:text-left font-heading text-2xl md:text-4xl italic px-8 md:px-12 leading-tight">
          <span className="absolute left-0 top-[-0.5rem] text-5xl md:text-9xl not-italic leading-none">
            “
          </span>

          <span className="md:ml-6">{t("quote")}</span>

          <span className="absolute right-0 bottom-[-0.5rem] text-5xl md:text-9xl not-italic leading-none">
            ”
          </span>

          <cite className="block text-right font-body text-base md:text-2xl mt-6 not-italic">
            — {t("author")}
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default InfoSection;
