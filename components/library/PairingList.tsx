"use client";

import { fontRegistry } from "@/lib/fonts";
import { Pairing } from "@/types/pairing";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface PairingListProps {
  pairings: Pairing[];
}

const createSlug = (value: string) =>
  value.toLowerCase().trim().replace(/\s+/g, "-");

const PairingList = ({ pairings }: PairingListProps) => {
  const b = useTranslations("BookPage");
  const router = useRouter();

  return (
    <>
      {pairings.map((pairing) => {
        const headingFont = fontRegistry[pairing.fonts.heading.key];
        const bodyFont = fontRegistry[pairing.fonts.body.key];
        const slug = createSlug(pairing.name);

        return (
          <div key={pairing.id}>
            <article
              onClick={() => router.push(`/library/${slug}`)}
              className="group cursor-pointer overflow-hidden border border-foreground/10 bg-[#FCFBF8] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6 min-h-[260px] flex flex-col justify-center border-b border-foreground/10">
                <p
                  className={`${headingFont.className} ${pairing.fonts.heading.weight} text-[18pt] leading-tight mb-6 line-clamp-1`}
                >
                  {b("title")}
                </p>

                <p
                  className={`${bodyFont.className} text-[11pt] leading-[18pt] text-justify hyphens-auto text-foreground/80`}
                >
                  {b("body_short")}
                </p>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.15em]">
                    {pairing.name}
                  </h2>

                  <p className="mt-1 text-xs text-foreground/50 capitalize">
                    {pairing.classification.genre} ·{" "}
                    {pairing.classification.subgenre}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-foreground/10">
                  <p className={`${headingFont.className} text-sm`}>
                    {pairing.fonts.heading.name}
                  </p>

                  <p
                    className={`${bodyFont.className} text-sm text-foreground/70`}
                  >
                    {pairing.fonts.body.name}
                  </p>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default PairingList;
