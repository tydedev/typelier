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
  const b = await getTranslations("BookPage");
  const { slug } = await params;

  const createSlug = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

  const pairing = pairings.find((p) => createSlug(p.name) === slug);

  if (!pairing) return <p>{t("notFound")}</p>;

  const headingFont = fontRegistry[pairing.fonts.heading.key];
  const bodyFont = fontRegistry[pairing.fonts.body.key];

  return (
    <article className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-12">
      {/* Preview */}
      <div className="flex flex-col lg:items-start items-center justify-start lg:col-span-5">
        <BookPreview
          headingFont={headingFont.className}
          bodyFont={bodyFont.className}
          headingWeight={pairing.fonts.heading.weight}
          size={pairing.fonts.body.size}
        />

        <p className="mt-5 text-xs text-foreground/50">
          {b.rich("excerpt", {
            i: (chunks) => <i>{chunks}</i>,
          })}
        </p>
      </div>

      {/* Details */}
      <aside className="lg:col-span-7 lg:pt-6">
        {/* Header */}
        <div>
          <SmallHeading margin="mt-0">{pairing.name}</SmallHeading>

          <div className="mt-3 flex items-center gap-3 text-sm text-foreground/90">
            <span className="capitalize">{pairing.classification.genre}</span>

            <span>·</span>

            <span className="capitalize">
              {pairing.classification.subgenre}
            </span>
          </div>
        </div>

        {/* Mood */}
        <div className="mt-10">
          <Label>Mood</Label>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {pairing.mood.map((item) => (
              <Link
                href={`/library?mood=${item}`}
                key={item}
                className="capitalize text-foreground/90 transition hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Fonts */}
        <div className="mt-12 border-t pt-8">
          <Label>{t("fonts.heading")}</Label>

          <Link
            href={pairing.fonts.heading.url || ""}
            target="_blank"
            className="group mt-2 flex items-center gap-2"
          >
            <span
              className={`${headingFont.className} text-3xl text-foreground transition-opacity group-hover:opacity-60`}
            >
              {pairing.fonts.heading.name}
            </span>

            <Link2
              size={15}
              className="text-foreground/90 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Label className="mt-8 block">{t("fonts.body")}</Label>

          <Link
            href={pairing.fonts.body.url || ""}
            target="_blank"
            className="group mt-2 flex items-center gap-2"
          >
            <span
              className={`${bodyFont.className} text-3xl text-foreground transition-opacity group-hover:opacity-60`}
            >
              {pairing.fonts.body.name}
            </span>

            <Link2
              size={15}
              className="text-foreground/90 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Best for */}
        <div className="mt-12 border-t pt-8">
          <Label>{t("recommended")}</Label>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
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

        {/* Settings */}
        <div className="mt-12 border-t pt-8">
          <Label>{t("settings")}</Label>

          <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5 text-sm">
            {pairing.typography.bodySize && (
              <div>
                <dt className="text-foreground/90 font-medium">Body size</dt>
                <dd className="mt-1 text-foreground/90">
                  {pairing.typography.bodySize}
                </dd>
              </div>
            )}

            {pairing.typography.bodyLeading && (
              <div>
                <dt className="text-foreground/90 font-medium">Body leading</dt>
                <dd className="mt-1 text-foreground/90">
                  {pairing.typography.bodyLeading}
                </dd>
              </div>
            )}

            {pairing.typography.headingSize && (
              <div>
                <dt className="text-foreground/90 font-medium">Heading size</dt>
                <dd className="mt-1 text-foreground/90">
                  {pairing.typography.headingSize}
                </dd>
              </div>
            )}

            {pairing.typography.headingLeading && (
              <div>
                <dt className="text-foreground/90 font-medium">
                  Heading leading
                </dt>
                <dd className="mt-1 text-foreground/90">
                  {pairing.typography.headingLeading}
                </dd>
              </div>
            )}

            {pairing.typography.notes && (
              <div className="col-span-2">
                <dt className="text-foreground/90 font-medium">Notes</dt>
                <dd className="mt-1 text-foreground/90 max-w-[400px]">
                  {pairing.typography.notes}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </aside>
    </article>
  );
}

export default PairingPage;
