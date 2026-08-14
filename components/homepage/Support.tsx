import { useTranslations } from "next-intl";
import Link from "next/link";

const Support = () => {
  const t = useTranslations("Support");
  return (
    <section className="mt-32 border-t border-foreground/15 pt-20">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        {/* Label */}
        <div className="md:col-span-4">
          <p className="text-4xl font-semibold font-heading">{t("label")}</p>
        </div>

        {/* Latest article */}
        <div className="md:col-span-6">
          <p className="text-2xl leading-tight tracking-tighter md:text-4xl">
            {t.rich("description", {
              link: (chunks) => (
                <Link
                  href="https://ko-fi.com/tydedev"
                  target="_blank"
                  className="underline text-red-600 hover:text-red-700"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
