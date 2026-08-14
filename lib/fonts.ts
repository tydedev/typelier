import {
  EB_Garamond,
  Source_Serif_4,
  Baloo_2,
  Cinzel,
  Lora,
  Merriweather,
  Playfair_Display,
  Nunito,
  Bokor,
  Audiowide,
  Syne_Mono,
  Grenze_Gotisch,
} from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400"],
});

export const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

export const bokor = Bokor({
  subsets: ["latin"],
  weight: ["400"],
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
  sourceSerif,
  baloo2,
  cinzel,
  lora,
  merriweather,
  playfair,
  nunito,
  bokor,
  audiowide,
  syneMono,
  grenzeGotisch,
  ebGaramond,
};

export const fontMetadata = {
  grenzeGotisch: {
    name: "Grenze Gotisch",
    category: "Blackletter",
    role: "display",
    weights: ["400"],
    url: "https://fonts.google.com/specimen/Grenze+Gotisch",
  },
  syneMono: {
    name: "Syne Mono",
    category: "monospace",
    role: "display",
    weights: ["400"],
    url: "https://fonts.google.com/specimen/Syne+Mono",
  },
  audiowide: {
    name: "Audiowide",
    category: "display",
    role: "display",
    weights: ["400"],
    url: "https://fonts.google.com/specimen/Audiowide",
  },
  bokor: {
    name: "Bokor",
    category: "display",
    role: "display",
    weights: ["400"],
    url: "https://fonts.google.com/specimen/Bokor",
  },

  ebGaramond: {
    name: "EB Garamond",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/EB+Garamond",
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
