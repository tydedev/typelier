"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locales } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { useState, startTransition } from "react";

type LocaleCode = keyof typeof Locales;

interface Props {
  ghost?: boolean;
  translatedPathnames?: Partial<Record<LocaleCode, string>>;
}

import { useTranslatedPathnamesStore } from "@/lib/store/translated-pathnames";

const LocaleSwitcher = ({ ghost }: Omit<Props, "translatedPathnames">) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { pathnames: translatedPathnames } = useTranslatedPathnamesStore();

  const [isLoading, setIsLoading] = useState(false);

  function onSelectChange(nextLocale: LocaleCode) {
    if (nextLocale === locale) return;

    setIsLoading(true);

    const nextPathname = translatedPathnames?.[nextLocale] ?? pathname;

    startTransition(() => {
      router.replace(nextPathname as never, {
        locale: nextLocale,
      });
    });
  }

  const buttonClass = "p-0 h-auto min-h-0 font-normal text-sm cursor-pointer";

  return (
    <div>
      <Button
        onClick={() => onSelectChange("it")}
        variant="link"
        className={cn(
          buttonClass,
          locale === "it" && "underline text-black pointer-events-none",
        )}
        disabled={isLoading}
      >
        IT
      </Button>

      <span className="mx-2 text-foreground/40">|</span>

      <Button
        onClick={() => onSelectChange("en")}
        variant="link"
        className={cn(
          buttonClass,
          locale === "en" && "underline text-black pointer-events-none",
        )}
        disabled={isLoading}
      >
        EN
      </Button>
    </div>
  );
};

export default LocaleSwitcher;
