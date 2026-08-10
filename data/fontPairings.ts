import { fontMetadata } from "@/lib/fonts";
import { Pairing } from "@/types/pairing";

const pairings = [
  {
    id: "fantasy-001",
    name: "Ancient Fantasy",
    featured: true,

    classification: {
      type: "fiction",
      genre: "fantasy",
      subgenre: "epic fantasy",
    },

    mood: ["ancient", "mystical", "elegant", "literary"],

    style: {
      era: "classical",
      tone: "warm",
      complexity: "high",
    },

    fonts: {
      heading: {
        ...fontMetadata.cormorant,
        key: "cormorant",
        weight: "font-bold",
      },

      body: {
        ...fontMetadata.sourceSerif,
        key: "sourceSerif",
      },
    },

    typography: {
      headingSize: "20pt",
      headingLeading: "1.1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },

    recommendedFor: ["epic fantasy", "historical fantasy", "folklore"],
  },
  {
    id: "midgr-001",
    name: "Whimsical Tales",
    featured: true,

    classification: {
      type: "fiction",
      genre: "fantasy",
      subgenre: "Middle Grade Fantasy",
    },

    mood: ["playful", "whimsical", "friendly", "lighthearted"],

    style: {
      era: "classical",
      tone: "warm",
      complexity: "low",
    },

    fonts: {
      heading: {
        ...fontMetadata.baloo2,
        key: "baloo2",
        weight: "font-normal",
      },

      body: {
        ...fontMetadata.nunito,
        key: "nunito",
      },
    },

    typography: {
      headingSize: "20pt",
      headingLeading: "1.1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },

    recommendedFor: [
      "middle grade fantasy",
      "children's fantasy",
      "whimsical fiction",
    ],
  },
] satisfies Pairing[];

export default pairings;
