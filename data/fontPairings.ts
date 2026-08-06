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
        name: "Cormorant Garamond",
        key: "cormorant",
        category: "serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Source Serif 4",
        key: "sourceSerif",
        category: "serif",
        role: "text",
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
    id: "romance-001",
    name: "Romantic Elegance",
    classification: {
      type: "fiction",
      genre: "romance",
      subgenre: "contemporary romance",
    },
    mood: ["romantic", "soft", "intimate", "emotional"],
    style: {
      era: "modern",
      tone: "warm",
      complexity: "medium",
    },
    fonts: {
      heading: {
        name: "Playfair Display",
        key: "playfair",
        category: "serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Lora",
        key: "lora",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "22pt",
      headingLeading: "1.15",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },
    recommendedFor: ["romance", "women's fiction", "romantic drama"],
  },

  {
    id: "thriller-001",
    name: "Dark Investigation",
    classification: {
      type: "fiction",
      genre: "thriller",
      subgenre: "crime thriller",
    },
    mood: ["dark", "tense", "modern", "suspenseful"],
    style: {
      era: "contemporary",
      tone: "cold",
      complexity: "medium",
    },
    fonts: {
      heading: {
        name: "Bodoni Moda",
        key: "bodoniModa",
        category: "serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Libre Baskerville",
        key: "libreBaskerville",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "19pt",
      headingLeading: "1.1",
      bodySize: "10.5pt",
      bodyLeading: "17pt",
      alignment: "justify",
    },
    recommendedFor: ["crime", "mystery", "psychological thriller"],
  },

  {
    id: "scifi-001",
    name: "Future Interface",
    featured: true,
    classification: {
      type: "fiction",
      genre: "science fiction",
      subgenre: "space opera",
    },
    mood: ["futuristic", "technical", "vast", "minimal"],
    style: {
      era: "future",
      tone: "cool",
      complexity: "medium",
    },
    fonts: {
      heading: {
        name: "Space Grotesk",
        key: "spaceGrotesk",
        category: "sans-serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Source Serif 4",
        key: "sourceSerif",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "21pt",
      headingLeading: "1.1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "left",
    },
    recommendedFor: ["science fiction", "space opera", "cyberpunk"],
  },

  {
    id: "horror-001",
    name: "Gothic Horror",
    classification: {
      type: "fiction",
      genre: "horror",
      subgenre: "gothic horror",
    },
    mood: ["dark", "ominous", "dramatic", "ancient"],
    style: {
      era: "victorian",
      tone: "cold",
      complexity: "high",
    },
    fonts: {
      heading: {
        name: "UnifrakturCook",
        key: "unifrakturCook",
        category: "blackletter",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Crimson Text",
        key: "crimsonText",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "24pt",
      headingLeading: "1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },
    recommendedFor: ["gothic horror", "dark fantasy", "supernatural"],
  },

  {
    id: "literary-001",
    name: "Literary Classic",
    classification: {
      type: "fiction",
      genre: "literary fiction",
      subgenre: "classic literature",
    },
    mood: ["refined", "quiet", "intellectual", "timeless"],
    style: {
      era: "classic",
      tone: "neutral",
      complexity: "high",
    },
    fonts: {
      heading: {
        name: "Libre Baskerville",
        key: "libreBaskerville",
        category: "serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Merriweather",
        key: "merriweather",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "20pt",
      headingLeading: "1.2",
      bodySize: "11pt",
      bodyLeading: "19pt",
      alignment: "justify",
    },
    recommendedFor: ["literary fiction", "classics", "drama"],
  },

  {
    id: "historical-001",
    name: "Historical Chronicle",
    classification: {
      type: "fiction",
      genre: "historical fiction",
      subgenre: "historical drama",
    },
    mood: ["nostalgic", "authentic", "traditional", "elegant"],
    style: {
      era: "old-style",
      tone: "warm",
      complexity: "high",
    },
    fonts: {
      heading: {
        name: "Cormorant Garamond",
        key: "cormorant",
        category: "serif",
        role: "display",
        weight: "600",
      },
      body: {
        name: "Crimson Text",
        key: "crimsonText",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "21pt",
      headingLeading: "1.15",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },
    recommendedFor: ["historical fiction", "period drama"],
  },

  {
    id: "mystery-001",
    name: "Classic Mystery",
    classification: {
      type: "fiction",
      genre: "mystery",
      subgenre: "detective fiction",
    },
    mood: ["clever", "classic", "investigative", "precise"],
    style: {
      era: "classic",
      tone: "neutral",
      complexity: "medium",
    },
    fonts: {
      heading: {
        name: "Cinzel",
        key: "cinzel",
        category: "serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Lora",
        key: "lora",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "20pt",
      headingLeading: "1.1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },
    recommendedFor: ["detective fiction", "whodunit", "mystery"],
  },

  {
    id: "adventure-001",
    name: "Adventure Journal",
    classification: {
      type: "fiction",
      genre: "adventure",
      subgenre: "exploration",
    },
    mood: ["dynamic", "bold", "exploratory", "energetic"],
    style: {
      era: "modern",
      tone: "warm",
      complexity: "medium",
    },
    fonts: {
      heading: {
        name: "Oswald",
        key: "oswald",
        category: "sans-serif",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Merriweather",
        key: "merriweather",
        category: "serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "22pt",
      headingLeading: "1",
      bodySize: "11pt",
      bodyLeading: "18pt",
      alignment: "justify",
    },
    recommendedFor: ["adventure", "travel fiction", "action"],
  },

  {
    id: "children-001",
    name: "Whimsical Tales",
    featured: true,
    classification: {
      type: "fiction",
      genre: "children",
      subgenre: "middle grade",
    },
    mood: ["playful", "friendly", "magical", "bright"],
    style: {
      era: "modern",
      tone: "warm",
      complexity: "low",
    },
    fonts: {
      heading: {
        name: "Baloo 2",
        key: "baloo2",
        category: "display",
        role: "display",
        weight: "700",
      },
      body: {
        name: "Nunito",
        key: "nunito",
        category: "sans-serif",
        role: "text",
      },
    },
    typography: {
      headingSize: "24pt",
      headingLeading: "1.1",
      bodySize: "12pt",
      bodyLeading: "20pt",
      alignment: "left",
    },
    recommendedFor: ["children", "middle grade", "fairy tales"],
  },
] satisfies Pairing[];

export default pairings;
