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
  Cormorant_Garamond,
  Crimson_Pro,
  Newsreader,
  Libre_Baskerville,
  DM_Serif_Display,
  DM_Sans,
  Manrope,
  Inter,
  Poppins,
  Josefin_Sans,
  Space_Grotesk,
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

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fontRegistry = {
  ebGaramond,
  grenzeGotisch,
  syneMono,
  audiowide,
  bokor,
  sourceSerif,
  baloo2,
  nunito,
  cinzel,
  lora,
  merriweather,
  playfair,
  cormorantGaramond,
  crimsonPro,
  newsreader,
  libreBaskerville,
  dmSerifDisplay,
  dmSans,
  manrope,
  inter,
  poppins,
  josefinSans,
  spaceGrotesk,
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

  cormorantGaramond: {
    name: "Cormorant Garamond",
    category: "serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Cormorant+Garamond",
  },

  crimsonPro: {
    name: "Crimson Pro",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Crimson+Pro",
  },

  newsreader: {
    name: "Newsreader",
    category: "serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Newsreader",
  },

  libreBaskerville: {
    name: "Libre Baskerville",
    category: "serif",
    role: "text",
    weights: ["400", "700"],
    url: "https://fonts.google.com/specimen/Libre+Baskerville",
  },

  dmSerifDisplay: {
    name: "DM Serif Display",
    category: "serif",
    role: "display",
    weights: ["400"],
    url: "https://fonts.google.com/specimen/DM+Serif+Display",
  },

  dmSans: {
    name: "DM Sans",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/DM+Sans",
  },

  manrope: {
    name: "Manrope",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Manrope",
  },

  inter: {
    name: "Inter",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Inter",
  },

  poppins: {
    name: "Poppins",
    category: "sans-serif",
    role: "text",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Poppins",
  },

  josefinSans: {
    name: "Josefin Sans",
    category: "sans-serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Josefin+Sans",
  },

  spaceGrotesk: {
    name: "Space Grotesk",
    category: "sans-serif",
    role: "display",
    weights: ["400", "500", "600", "700"],
    url: "https://fonts.google.com/specimen/Space+Grotesk",
  },
} as const;
