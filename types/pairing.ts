import { fontRegistry } from "@/lib/fonts";

export type FontKey = keyof typeof fontRegistry;

export interface Pairing {
  id: string;
  name: string;
  featured?: boolean;

  classification: {
    type: string;
    genre: string;
    subgenre: string;
  };

  mood: string[];

  style: {
    era: string;
    tone: string;
    complexity: string;
  };

  fonts: {
    heading: {
      name: string;
      key: FontKey;
      category: string;
      role: string;
      weight?: string;
      url?: string;
      size?: string;
    };

    body: {
      name: string;
      key: FontKey;
      category: string;
      role: string;
      weight?: string;
      url?: string;
      size?: string;
    };
  };

  typography: {
    headingSize: string;
    headingLeading: string;
    bodySize: string;
    bodyLeading: string;
    alignment: string;
  };

  recommendedFor: string[];
}
