import {
  Cormorant_Garamond,
  Source_Serif_4,
  Baloo_2,
  Cinzel,
  Lora,
  Merriweather,
  Playfair_Display,
  Nunito,
} from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fontRegistry = {
  cormorant,
  sourceSerif,
  baloo2,
  cinzel,
  lora,
  merriweather,
  playfair,
  nunito,
};

export const fontMetadata = {
  cormorant: {
    name: "Cormorant Garamond",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Cormorant+Garamond",
  },

  sourceSerif: {
    name: "Source Serif 4",
    category: "serif",
    role: "text",
    weights: ["400", "600", "700"],
    url: "https://fonts.google.com/specimen/Source+Serif+4",
  },

  baloo2: {
    name: "Baloo 2",
    category: "sans-serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Baloo+2",
  },

  cinzel: {
    name: "Cinzel",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Cinzel",
  },

  lora: {
    name: "Lora",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Lora",
  },

  merriweather: {
    name: "Merriweather",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Merriweather",
  },

  playfair: {
    name: "Playfair Display",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Playfair+Display",
  },

  nunito: {
    name: "Nunito",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Nunito",
  },
} as const;
