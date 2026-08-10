"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { ReactNode, useState } from "react";

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

const tabs = ["details", "specs"];

export default function ProductTabs({
  details,
  specifications,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("ProductTabs");

  return (
    <div className="col-span-full mt-4">
      <Separator />

      <div className="mt-6 flex items-center gap-2">
        {tabs.map((tabName, index) => (
          <Button
            key={tabName}
            variant={index === activeTab ? "default" : "ghost"}
            onClick={() => setActiveTab(index)}
          >
            {t(tabName)}
          </Button>
        ))}
      </div>

      <div className="mt-8 max-w-3xl">
        {activeTab === 0 && details}

        {activeTab === 1 && (
          <div>
            <dl className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
              {specifications.format && (
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-foreground/50">{t("format")}</dt>
                  <dd className="font-medium">{specifications.format}</dd>
                </div>
              )}

              {specifications.size && (
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-foreground/50">{t("size")}</dt>
                  <dd className="font-medium">{specifications.size}</dd>
                </div>
              )}

              {specifications.pages && (
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-foreground/50">{t("pages")}</dt>
                  <dd className="font-medium">{specifications.pages}</dd>
                </div>
              )}

              {specifications.productType && (
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-foreground/50">{t("type")}</dt>
                  <dd className="font-medium">{specifications.productType}</dd>
                </div>
              )}

              {specifications.printing && (
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-foreground/50">{t("printing")}</dt>
                  <dd className="font-medium">{specifications.printing}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
