import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime } from "@/components/ReadingTime";

export type ContentItem = {
  slug: string;
  metadata: {
    id: string;
    title: string;
    description: string;
    shopCategory?: string;
    category: string;
    type?: "article" | "product";
    price?: number;
    download?: boolean;
    featured?: boolean;
    image?: string;
    date?: string;
    readingTime?: number;
    // shop
    format?: string;
    size?: string;
    pages?: number;
    printing?: string;
    url?: string;
    productType: string;
  };
  content: string;
};

const contentPath = path.join(process.cwd(), "content");

export function getContent(
  folder: "resources" | "shop",
  locale: string,
  slug: string,
): ContentItem | null {
  const filePath = path.join(contentPath, folder, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file);

  return {
    slug,
    metadata: {
      ...data,
      readingTime: getReadingTime(content),
    } as ContentItem["metadata"],
    content,
  };
}

export function getContents(
  folder: "resources" | "shop",
  locale: string,
): ContentItem[] {
  const localePath = path.join(contentPath, folder, locale);

  if (!fs.existsSync(localePath)) {
    return [];
  }

  const files = fs.readdirSync(localePath);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const item = getContent(folder, locale, slug);

      if (item && !item.metadata.shopCategory) {
        console.log("MISSING shopCategory:", item.slug);
      }

      return item;
    })
    .filter((item): item is ContentItem => item !== null);
}
export function getTranslatedSlug(
  folder: "resources" | "shop",
  id: string,
  targetLocale: string,
): string | null {
  const items = getContents(folder, targetLocale);
  const match = items.find((item) => item.metadata.id === id);
  return match?.slug ?? null;
}

export function getTranslatedPathnames(
  folder: "resources" | "shop",
  id: string,
  locales: string[] = ["it", "en"],
): Partial<Record<string, string>> {
  const base = folder === "resources" ? "/resources" : "/shop";
  const result: Partial<Record<string, string>> = {};

  for (const loc of locales) {
    const slug = getTranslatedSlug(folder, id, loc);
    if (slug) result[loc] = `${base}/${slug}`;
  }

  return result;
}
