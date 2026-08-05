import Search from "@/components/library/Search";
import pairings from "@/data/fontPairings";

type Props = {
  searchParams: Promise<{
    genre?: string;
    subgenre?: string;
    fontCategory?: string;
    mood?: string;
    q?: string;
  }>;
};

type Filters = {
  genres: string[];
  fontCategories: string[];
  moods: string[];
};

async function Library({ searchParams }: Props) {
  const { genre, subgenre, fontCategory, mood, q } = await searchParams;

  const filters: Filters = {
    genres: [...new Set(pairings.map((p) => p.classification.genre))],

    fontCategories: [
      ...new Set([
        ...pairings.map((p) => p.fonts.heading.category),
        ...pairings.map((p) => p.fonts.body.category),
      ]),
    ],

    moods: [...new Set(pairings.flatMap((p) => p.mood))],
  };

  let filteredPairings = pairings;

  if (genre) {
    filteredPairings = filteredPairings.filter(
      (p) => p.classification.genre.toLowerCase() === genre.toLowerCase(),
    );
  }

  if (subgenre) {
    filteredPairings = filteredPairings.filter(
      (p) => p.classification.subgenre.toLowerCase() === subgenre.toLowerCase(),
    );
  }

  if (fontCategory) {
    filteredPairings = filteredPairings.filter(
      (p) =>
        p.fonts.heading.category === fontCategory ||
        p.fonts.body.category === fontCategory,
    );
  }

  if (mood) {
    filteredPairings = filteredPairings.filter((p) => p.mood.includes(mood));
  }

  if (q) {
    const query = q.toLowerCase();

    filteredPairings = filteredPairings.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.fonts.heading.name.toLowerCase().includes(query) ||
        p.fonts.body.name.toLowerCase().includes(query) ||
        p.recommendedFor.some((item) => item.toLowerCase().includes(query)),
    );
  }

  return <Search filteredPairings={filteredPairings} filters={filters} />;
}

export default Library;
