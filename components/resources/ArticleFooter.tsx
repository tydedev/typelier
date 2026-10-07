import { useLocale, useTranslations } from "next-intl";

export default function ArticleFooter() {
  const t = useTranslations("Resources");
  const locale = useLocale();

  return (
    <footer className="mt-24 border-t border-foreground/15 pt-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            {t("articleFooter.title")}
          </p>

          <p className="mt-4 max-w-md font-serif text-2xl leading-tight tracking-tight">
            {t("articleFooter.description")}
          </p>
        </div>

        <a
          href={
            locale === "it"
              ? "https://tydedev.it/it/servizi/impaginazione-libri-autori-case-editrici"
              : "https://tydedev.it/en/services/book-layout-formatting-typesetting"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            shrink-0
            items-center
            gap-2
            text-xs
            font-medium
            uppercase
            tracking-[0.12em]
            transition-opacity
            hover:opacity-60
          "
        >
          {t("articleFooter.link")}
          <span className="text-base">→</span>
        </a>
      </div>
    </footer>
  );
}
