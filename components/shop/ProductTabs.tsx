"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";

type ProductTabsProps = {
  details: ReactNode;
  specifications: {
    format?: string;
    size?: string;
    pages?: number;
    productType?: string;
    printing?: string;
  };
};

const tabs = ["details", "specs"] as const;

export default function ProductTabs({
  details,
  specifications,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("details");

  const t = useTranslations("ProductTabs");

  return (
    <section>
      {/* Tabs */}
      <nav className="flex border-b border-foreground/15">
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative px-0 pb-3 mr-8 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors ${
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(tab)}

              {active && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-foreground" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Content */}
      <div className="mt-10">
        {activeTab === "details" && (
          <div
            className="
              prose
              prose-neutral
              max-w-3xl

              prose-headings:font-serif
              prose-headings:font-normal
              prose-headings:tracking-tight

              prose-h2:mt-10
              prose-h2:text-3xl

              prose-p:leading-relaxed
              prose-p:text-foreground/80

              prose-li:text-foreground/80
            "
          >
            {details}
          </div>
        )}

        {activeTab === "specs" && (
          <dl className="max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
            {specifications.format && (
              <div className="grid grid-cols-2 gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{t("format")}</dt>
                <dd className="text-right font-medium">
                  {specifications.format}
                </dd>
              </div>
            )}

            {specifications.size && (
              <div className="grid grid-cols-2 gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{t("size")}</dt>
                <dd className="text-right font-medium">
                  {specifications.size}
                </dd>
              </div>
            )}

            {specifications.pages && (
              <div className="grid grid-cols-2 gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{t("pages")}</dt>
                <dd className="text-right font-medium">
                  {specifications.pages}
                </dd>
              </div>
            )}

            {specifications.productType && (
              <div className="grid grid-cols-2 gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{t("type")}</dt>
                <dd className="text-right font-medium">
                  {specifications.productType}
                </dd>
              </div>
            )}

            {specifications.printing && (
              <div className="grid grid-cols-2 gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{t("printing")}</dt>
                <dd className="text-right font-medium">
                  {specifications.printing}
                </dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </section>
  );
}
