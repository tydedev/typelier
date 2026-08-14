import { fontMetadata } from "@/lib/fonts";
import { Pairing } from "@/types/pairing";

const pairings: Pairing[] = [
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
        ...fontMetadata.ebGaramond,
        key: "ebGaramond",
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
    id: "fantasy-002",
    name: "Whimsical Tales",
    featured: true,

    classification: {
      type: "fiction",
      genre: "fantasy",
      subgenre: "middle grade fantasy",
    },

    mood: ["playful", "whimsical", "friendly", "lighthearted"],

    style: {
      era: "modern",
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

  {
    id: "scifi-001",
    name: "Space Odyssey",
    featured: true,

    classification: {
      type: "fiction",
      genre: "science fiction",
      subgenre: "space opera",
    },

    mood: ["scifi", "space", "future", "exploration"],

    style: {
      era: "modern",
      tone: "warm",
      complexity: "high",
    },

    fonts: {
      heading: {
        ...fontMetadata.audiowide,
        key: "audiowide",
        weight: "font-bold",
      },
      body: {
        ...fontMetadata.merriweather,
        key: "merriweather",
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
      "space opera",
      "science fiction",
      "future science fiction",
      "space travel",
    ],
  },

  {
    id: "horror-001",
    name: "Haunted Mansion",
    featured: false,

    classification: {
      type: "fiction",
      genre: "horror",
      subgenre: "mystery",
    },

    mood: ["haunted", "dark", "creepy", "suspense"],

    style: {
      era: "modern",
      tone: "dark",
      complexity: "high",
    },

    fonts: {
      heading: {
        ...fontMetadata.grenzeGotisch,
        key: "grenzeGotisch",
        weight: "font-bold",
      },
      body: {
        ...fontMetadata.ebGaramond,
        key: "ebGaramond",
        size: "text-[15px] leading-[18px]!",
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
      "mystery",
      "horror",
      "ghost stories",
      "suspense",
      "haunted mansion",
    ],
  },
];

export default pairings;
