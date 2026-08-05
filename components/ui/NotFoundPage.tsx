import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  const t = useTranslations("NotFound");
  return (
    <div className="text-center flex flex-col gap-4 h-full items-center justify-center">
      <h1 className="text-2xl font-heading font-medium">{t("title")}</h1>
      <p className="text-base">{t("description")}</p>
      <Link href="/" className="font-medium border-b border-foreground">
        {t("link")}
      </Link>
    </div>
  );
}

export default NotFoundPage;
