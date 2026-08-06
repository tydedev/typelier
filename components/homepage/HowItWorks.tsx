import { useTranslations } from "next-intl";
import SmallHeading from "../global/SmallHeading";
import { genres } from "@/lib/genres";
import Link from "next/link";

const HowItWorks = () => {
  const t = useTranslations("HowItWorks");
  return (
    <div>
      <SmallHeading>{t("title")}</SmallHeading>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        <p className="font-medium pb-5 text-2xl">{t("question")}</p>
        <div className="font-sm">
          {t.rich("description", {
            p: (chunks) => <p className="pb-3">{chunks}</p>,
            b: (chunks) => (
              <span className="font-medium">
                <Link href="https://fonts.google.com/" target="_blank">
                  {chunks}
                </Link>
              </span>
            ),
          })}
        </div>
        <div className="flex flex-col">
          <p className="font-medium uppercase font-heading tracking-wide pb-5 text-foreground/80">
            {t("browse")}
          </p>
          <ul className="space-y-3">
            {genres.map((genre) => (
              <li key={genre.slug}>
                <Link href={genre.slug} className="font-medium">
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
