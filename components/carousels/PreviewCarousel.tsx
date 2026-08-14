"use client";

import {
  baloo2,
  cinzel,
  lora,
  merriweather,
  playfair,
  sourceSerif,
} from "@/lib/fonts";
import { useEffect, useState } from "react";
import BookPreview from "../preview/BookPreview";
import { useTranslations } from "next-intl";

const previews = [
  {
    headingFont: cinzel.className,
    bodyFont: lora.className,
  },
  {
    headingFont: baloo2.className,
    bodyFont: sourceSerif.className,
  },
  {
    headingFont: playfair.className,
    bodyFont: merriweather.className,
  },
];

export default function PreviewCarousel() {
  const t = useTranslations("BookPage");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % previews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-1/2 flex-col items-center justify-center py-30">
      <div className="relative flex w-full justify-center">
        {previews.map((preview, i) => (
          <BookPreview
            key={i}
            headingFont={preview.headingFont}
            bodyFont={preview.bodyFont}
            className={`transition-all duration-700 ${
              i === index
                ? "relative opacity-100 scale-100"
                : "absolute opacity-0 scale-95"
            }`}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-foreground/50">
        {t.rich("excerpt", { i: (chunks) => <i>{chunks}</i> })}
      </p>
    </div>
  );
}
