import { genres } from "@/lib/genres";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Navigation = () => {
  const t = useTranslations("Footer.navigation");
  const n = useTranslations("Header");
  return (
    <>
      <div className="col-span-full md:col-span-2 space-y-2">
        <h3>
          <span className="font-medium font-heading tracking-wider uppercase">
            {t("explore")}
          </span>
        </h3>
        <ul className="flex flex-col text-sm font-medium capitalize">
          {genres.map((genre) => (
            <li key={genre.name}>
              <Link href={genre.slug}>{genre.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full md:col-span-2 space-y-2">
        <h3>
          <span className="font-medium font-heading tracking-wider uppercase">
            {t("resources")}
          </span>
        </h3>
        <ul className="flex flex-col text-sm font-medium">
          <li>
            <Link href="/resources">{n("articles")}</Link>
          </li>
          <li>
            <Link href="/shop">{n("shop")}</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-full md:col-span-2 space-y-2">
        <h3>
          <span className="font-medium font-heading tracking-wider uppercase">
            {t("support")}
          </span>
        </h3>
        <ul className="flex flex-col text-sm font-medium">
          <li>
            <Link href="https://ko-fi.com/tydedev" target="_blank">
              Ko-fi
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
