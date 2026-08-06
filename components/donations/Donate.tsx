import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";

const Donate = () => {
  const t = useTranslations("Donate");
  return (
    <section className="grid grid-cols-12 gap-8 text-center my-18 bg-neutral-200 p-8 rounded-lg">
      <div className="col-span-full md:col-span-6 w-full space-y-3">
        <h2 className="font-heading text-2xl md:text-3xl font-medium">
          {t("title")}
        </h2>
        <p>{t("description")}</p>
        <Separator className="bg-foreground/20 my-5" />
        <div className="space-x-3">
          <Button className="bg-neutral-500 tracking-wide">
            {t("button")}
          </Button>
        </div>
      </div>
      <div className="col-span-full md:col-span-6 w-full space-y-3">
        <h2 className="font-heading text-2xl md:text-3xl font-medium">
          {t("title2")}
        </h2>
        <p>{t("description2")}</p>
        <Separator className="bg-foreground/20 my-5" />
        <div className="space-x-3">
          <Button className="bg-neutral-500 tracking-wide">
            {t("button2")} <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donate;
