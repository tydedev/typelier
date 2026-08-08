"use client";

import { useTranslations } from "next-intl";
import PreviewCarousel from "../carousels/PreviewCarousel";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Hero");
  const router = useRouter();

  function handleClick() {
    router.push("/library");
  }
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 min-h-screen py-16 md:py-0">
      <div className="w-full md:max-w-4xl flex flex-col items-start justify-center gap-4 mb-20">
        <h2 className="font-heading text-lg md:text-xl font-medium uppercase tracking-widest border-b border-foreground/10 pb-2 text-foreground/70 mb-2 w-full">
          Typelier
        </h2>

        <h1 className="font-heading text-4xl md:text-6xl font-normal text-foreground leading-[0.9]">
          <span className="block">{t("title1")}</span>
          <span className="block">{t("title2")}</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-foreground/70">
          {t("subtitle")}
        </p>
        <div>
          <Button
            variant="link"
            className="text-lg p-0 cursor-pointer"
            onClick={handleClick}
          >
            {t("button")} →
          </Button>
        </div>
      </div>

      <PreviewCarousel />
    </section>
  );
};

export default Hero;
