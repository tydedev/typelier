import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime } from "@/components/ReadingTime";

export type ContentItem = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    category: string;
    type?: "article" | "freebie" | "product";
    price?: number;
    download?: boolean;
    featured?: boolean;
    image?: string;
    date?: string;
    readingTime?: number;
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

      return getContent(folder, locale, slug);
    })
    .filter((item): item is ContentItem => item !== null);
}
