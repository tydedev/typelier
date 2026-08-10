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
    url: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700",
  },

  sourceSerif: {
    name: "Source Serif 4",
    category: "serif",
    role: "text",
    weights: ["400", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700",
  },

  baloo2: {
    name: "Baloo 2",
    category: "sans-serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700",
  },

  cinzel: {
    name: "Cinzel",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700",
  },

  lora: {
    name: "Lora",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700",
  },

  merriweather: {
    name: "Merriweather",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;500;600;700",
  },

  playfair: {
    name: "Playfair Display",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700",
  },

  nunito: {
    name: "Nunito",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700",
  },
} as const;
