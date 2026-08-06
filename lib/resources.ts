import fs from "fs";
import path from "path";
import matter from "gray-matter";

const resourcesPath = path.join(process.cwd(), "content/resources");

export function getResource(locale: string, slug: string) {
  const filePath = path.join(resourcesPath, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file);

  return {
    slug,
    metadata: data,
    content,
  };
}

export function getResources(locale: string): Resource[] {
  const localePath = path.join(resourcesPath, locale);

  if (!fs.existsSync(localePath)) {
    return [];
  }

  const files = fs.readdirSync(localePath);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");

      return getResource(locale, slug);
    })
    .filter((resource): resource is Resource => resource !== null);
}
export type Resource = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    category: string;
    featured?: boolean;
    image?: string;
    date?: string;
    readingTime?: string;
  };
  content: string;
};
