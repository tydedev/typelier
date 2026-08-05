import {
  Cormorant_Garamond,
  Source_Serif_4,
  Playfair_Display,
  Lora,
  Cinzel,
  Bebas_Neue,
  Merriweather,
  Bodoni_Moda,
  Libre_Baskerville,
  Oswald,
  Space_Grotesk,
  UnifrakturCook,
  Crimson_Text,
  Montserrat,
  Baloo_2,
  Nunito,
} from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const unifrakturCook = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
});

export const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fontRegistry = {
  cormorant,
  sourceSerif,
  playfair,
  cinzel,
  lora,
  bebasNeue,
  merriweather,
  bodoniModa,
  libreBaskerville,
  oswald,
  spaceGrotesk,
  unifrakturCook,
  crimsonText,
  montserrat,
  baloo2,
  nunito,
};
