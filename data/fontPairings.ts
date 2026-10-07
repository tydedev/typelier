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
      headingLeading: "22pt",
      bodySize: "10.5pt",
      bodyLeading: "14.5pt",
      
    },

    recommendedFor: [
      "epic fantasy",
      "historical fantasy",
      "folklore",
      "mythological fiction",
    ],
  },

  {
    id: "literary-001",
    name: "Literary Classic",
    featured: true,

    classification: {
      type: "fiction",
      genre: "literary fiction",
      subgenre: "general literary fiction",
    },

    mood: ["refined", "quiet", "classic", "intellectual"],

    style: {
      era: "classical",
      tone: "neutral",
      complexity: "medium",
    },

    fonts: {
      heading: {
        ...fontMetadata.cormorantGaramond,
        key: "cormorantGaramond",
        weight: "font-semibold",
      },
      body: {
        ...fontMetadata.lora,
        key: "lora",
      },
    },

    typography: {
      headingSize: "21pt",
      headingLeading: "23pt",
      bodySize: "10.5pt",
      bodyLeading: "14.5pt",
      
    },

    recommendedFor: [
      "literary fiction",
      "general fiction",
      "character-driven fiction",
    ],
  },

  {
    id: "contemporary-001",
    name: "Contemporary Novel",
    featured: true,

    classification: {
      type: "fiction",
      genre: "contemporary fiction",
      subgenre: "commercial fiction",
    },

    mood: ["modern", "clean", "natural", "approachable"],

    style: {
      era: "modern",
      tone: "neutral",
      complexity: "low",
    },

    fonts: {
      heading: {
        ...fontMetadata.dmSans,
        key: "dmSans",
        weight: "font-semibold",
      },
      body: {
        ...fontMetadata.sourceSerif,
        key: "sourceSerif",
      },
    },

    typography: {
      headingSize: "18pt",
      headingLeading: "21pt",
      bodySize: "10.5pt",
      bodyLeading: "14pt",
      
    },

    recommendedFor: [
      "contemporary fiction",
      "commercial fiction",
      "modern novels",
      "upmarket fiction",
    ],
  },

  {
    id: "horror-001",
    name: "Haunted Mansion",
    featured: false,

    classification: {
      type: "fiction",
      genre: "horror",
      subgenre: "gothic horror",
    },

    mood: ["haunted", "dark", "ominous", "suspenseful"],

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
      },
    },

    typography: {
      headingSize: "20pt",
      headingLeading: "22pt",
      bodySize: "10.5pt",
      bodyLeading: "14.5pt",
      
    },

    recommendedFor: [
      "gothic horror",
      "ghost stories",
      "supernatural horror",
      "haunted house fiction",
    ],
  },

  {
    id: "scifi-001",
    name: "Space Odyssey",
    featured: false,

    classification: {
      type: "fiction",
      genre: "science fiction",
      subgenre: "space opera",
    },

    mood: ["futuristic", "expansive", "technical", "exploratory"],

    style: {
      era: "modern",
      tone: "neutral",
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
      headingSize: "18pt",
      headingLeading: "21pt",
      bodySize: "10.5pt",
      bodyLeading: "14.5pt",
      
    },

    recommendedFor: [
      "space opera",
      "science fiction",
      "future fiction",
      "space travel",
    ],
  },

  {
    id: "mystery-001",
    name: "Cozy Mystery",
    featured: false,

    classification: {
      type: "fiction",
      genre: "mystery",
      subgenre: "cozy mystery",
    },

    mood: ["warm", "clever", "inviting", "playful"],

    style: {
      era: "modern",
      tone: "warm",
      complexity: "medium",
    },

    fonts: {
      heading: {
        ...fontMetadata.josefinSans,
        key: "josefinSans",
        weight: "font-semibold",
      },
      body: {
        ...fontMetadata.merriweather,
        key: "merriweather",
      },
    },

    typography: {
      headingSize: "18pt",
      headingLeading: "21pt",
      bodySize: "10.5pt",
      bodyLeading: "14.5pt",
      
    },

    recommendedFor: [
      "cozy mystery",
      "amateur detective fiction",
      "light mystery",
      "village mystery",
    ],
  },

  {
    id: "romance-001",
    name: "Romantic Drama",
    featured: false,

    classification: {
      type: "fiction",
      genre: "romance",
      subgenre: "contemporary romance",
    },

    mood: ["romantic", "soft", "intimate", "elegant"],

    style: {
      era: "modern",
      tone: "warm",
      complexity: "medium",
    },

    fonts: {
      heading: {
        ...fontMetadata.dmSerifDisplay,
        key: "dmSerifDisplay",
        weight: "font-normal",
      },
      body: {
        ...fontMetadata.lora,
        key: "lora",
      },
    },

    typography: {
      headingSize: "21pt",
      headingLeading: "23pt",
      bodySize: "11pt",
      bodyLeading: "15pt",
      
    },

    recommendedFor: [
      "contemporary romance",
      "romantic drama",
      "new adult romance",
      "women's fiction",
    ],
  },

  {
    id: "memoir-001",
    name: "Quiet Memoir",
    featured: false,

    classification: {
      type: "nonfiction",
      genre: "memoir",
      subgenre: "personal memoir",
    },

    mood: ["intimate", "warm", "quiet", "reflective"],

    style: {
      era: "modern",
      tone: "warm",
      complexity: "low",
    },

    fonts: {
      heading: {
        ...fontMetadata.libreBaskerville,
        key: "libreBaskerville",
        weight: "font-bold",
      },
      body: {
        ...fontMetadata.sourceSerif,
        key: "sourceSerif",
      },
    },

    typography: {
      headingSize: "19pt",
      headingLeading: "22pt",
      bodySize: "11pt",
      bodyLeading: "15.5pt",
      
    },

    recommendedFor: [
      "memoir",
      "personal memoir",
      "autobiography",
      "life writing",
    ],
  },

  {
    id: "guide-001",
    name: "Practical Guide",
    featured: false,

    classification: {
      type: "nonfiction",
      genre: "how-to",
      subgenre: "practical guide",
    },

    mood: ["clear", "structured", "professional", "accessible"],

    style: {
      era: "modern",
      tone: "neutral",
      complexity: "medium",
    },

    fonts: {
      heading: {
        ...fontMetadata.dmSans,
        key: "dmSans",
        weight: "font-bold",
      },
      body: {
        ...fontMetadata.merriweather,
        key: "merriweather",
      },
    },

    typography: {
      headingSize: "19pt",
      headingLeading: "22pt",
      bodySize: "10.5pt",
      bodyLeading: "15pt",
      
    },

    recommendedFor: [
      "how-to books",
      "practical guides",
      "instruction manuals",
      "DIY books",
    ],
  },

  {
    id: "poetry-001",
    name: "Modern Poetry",
    featured: false,

    classification: {
      type: "poetry",
      genre: "poetry",
      subgenre: "contemporary poetry",
    },

    mood: ["artistic", "minimal", "expressive", "contemplative"],

    style: {
      era: "modern",
      tone: "neutral",
      complexity: "high",
    },

    fonts: {
      heading: {
        ...fontMetadata.spaceGrotesk,
        key: "spaceGrotesk",
        weight: "font-medium",
      },
      body: {
        ...fontMetadata.newsreader,
        key: "newsreader",
      },
    },

    typography: {
      headingSize: "19pt",
      headingLeading: "22pt",
      bodySize: "11pt",
      bodyLeading: "17pt",
      
    },

    recommendedFor: [
      "contemporary poetry",
      "poetry collections",
      "experimental poetry",
      "spoken-word poetry",
    ],
  },
];

export default pairings;
