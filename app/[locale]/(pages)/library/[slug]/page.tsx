import SmallHeading from "@/components/global/SmallHeading";
import BookPreview from "@/components/preview/BookPreview";
import { Label } from "@/components/ui/label";
import pairings from "@/data/fontPairings";
import { fontRegistry } from "@/lib/fonts";
import { Link2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug?: string;
  }>;
};

async function PairingPage({ params }: Props) {
  const t = await getTranslations("PairingPage");
  const { slug } = await params;

  const createSlug = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

  const pairing = pairings.find((p) => createSlug(p.name) === slug);

  if (!pairing) return <p>{t("notFound")}</p>;

  const headingFont = fontRegistry[pairing.fonts.heading.key];
  const bodyFont = fontRegistry[pairing.fonts.body.key];

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
      {/* Preview */}
      <div className="lg:col-span-5 flex items-start justify-center">
        <BookPreview
          headingFont={headingFont.className}
          bodyFont={bodyFont.className}
          headingWeight={pairing.fonts.heading.weight}
        />
      </div>

      {/* Details */}
      <aside className="lg:col-span-7 space-y-10">
        <div>
          <SmallHeading margin="mt-0">{pairing.name}</SmallHeading>

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-foreground/70">
            <span className="capitalize">{pairing.classification.genre}</span>

            <span>·</span>

            <span className="capitalize">
              {pairing.classification.subgenre}
            </span>
          </div>
        </div>

        {/* Mood */}
        <div className="flex flex-wrap gap-2">
          {pairing.mood.map((item) => (
            <Link
              href={`/library?mood=${item}`}
              key={item}
              className="rounded-full border px-3 py-1 text-xs capitalize hover:bg-foreground/5 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Fonts */}
        <div className="space-y-6">
          <div>
            <Label>{t("fonts.heading")}</Label>

            <p className={`${headingFont.className} text-2xl mt-1`}>
              <Link
                href={pairing.fonts.heading.url}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Link2 size={16} /> {pairing.fonts.heading.name}
              </Link>
            </p>
          </div>

          <div>
            <Label>{t("fonts.body")}</Label>

            <p className={`${bodyFont.className} text-2xl mt-1`}>
              <Link
                href={pairing.fonts.body.url}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Link2 size={16} />
                {pairing.fonts.body.name}
              </Link>
            </p>
          </div>
        </div>

        {/* Recommended */}
        <div>
          <Label>{t("recommended")}</Label>

          <div className="mt-3 flex flex-wrap gap-2">
            {pairing.recommendedFor.map((item) => (
              <span
                key={item}
                className="text-sm capitalize text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
}

export default PairingPage;
