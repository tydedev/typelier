export type ContentItem = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    category: string;
    featured?: boolean;
    image?: string;
    date?: string;
    readingTime?: string;

    // shop
    type?: "article" | "freebie" | "product";
    price?: number;
    download?: boolean;
  };
  content: string;
};
