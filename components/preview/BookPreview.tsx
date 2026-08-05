import { useLocale, useTranslations } from "next-intl";

type BookPreviewProps = {
  headingFont: string;
  bodyFont: string;
  rotate?: string;
  className?: string;
  showFonts?: boolean;
};

export default function BookPreview({
  headingFont,
  bodyFont,
  rotate = "",
  className = "",
  showFonts = false,
}: BookPreviewProps) {
  const t = useTranslations("BookPage");
  const locale = useLocale();

  return (
    <article
      className={`${rotate} ${className} w-full max-w-[340px] aspect-[3/4] overflow-hidden border border-stone-200 bg-[#FCFBF8] shadow-xl select-none`}
    >
      <div className="flex h-full flex-col px-10 py-10">
        <header className="text-center">
          <p
            className={`${bodyFont} text-[8px] uppercase tracking-[0.35em]  text-stone-500`}
          >
            {t("chapter")}
          </p>

          <h2
            className={`${headingFont} mt-5 text-[34px] leading-none text-stone-900`}
          >
            {t("title")}
          </h2>
        </header>

        <div
          lang={locale}
          className={`${bodyFont} mt-10 flex-1 overflow-hidden text-justify text-[12px] leading-[1.5] hyphens-auto text-stone-800`}
        >
          {t.rich("body", {
            p: (chunks) => <p>{chunks}</p>,
            indent: (chunks) => <p className="indent-6">{chunks}</p>,
          })}
        </div>

        {showFonts && (
          <footer className="mt-8 border-t pt-4 text-xs uppercase tracking-widest text-stone-500">
            <div>{headingFont}</div>
            <div>{bodyFont}</div>
          </footer>
        )}
      </div>
    </article>
  );
}
