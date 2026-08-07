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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % previews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center flex-1/2 py-30 mb-20">
      {previews.map((preview, i) => (
        <BookPreview
          key={i}
          headingFont={preview.headingFont}
          bodyFont={preview.bodyFont}
          className={`absolute transition-all duration-700 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      ))}
    </div>
  );
}
