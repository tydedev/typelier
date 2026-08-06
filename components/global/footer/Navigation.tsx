import { genres } from "@/lib/genres";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("Footer.navigation");
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
              <a href={genre.slug}>{genre.name}</a>
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
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Research</a>
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
            <a href="https://ko-fi.com/tydedev" target="_blank">
              Ko-fi
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
