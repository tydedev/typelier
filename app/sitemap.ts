import type { MetadataRoute } from "next";

const host = (process.env.NEXT_PUBLIC_HOST || "https://typelier.com").replace(
  /\/$/,
  "",
);

const locales = ["en", "it"] as const;

type Locale = (typeof locales)[number];

const staticPages = [
  { path: "", priority: 1.0 },
  { path: "/library", priority: 0.9 },
  { path: "/resources", priority: 0.8 },
];

function getAlternates(
  getPath: (locale: Locale) => string,
): MetadataRoute.Sitemap[number]["alternates"] {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${host}/${locale}${getPath(locale)}`]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${host}/${locale}${page.path}`,
      lastModified: new Date(),
      priority: page.priority,
      alternates: getAlternates(() => page.path),
    })),
  );

  return staticEntries;
}
