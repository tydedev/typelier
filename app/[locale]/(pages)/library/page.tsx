import Search from "@/components/library/Search";
import pairings from "@/data/fontPairings";
import { paginate } from "@/lib/pagination";

type Props = {
  searchParams: Promise<{
    genre?: string;
    subgenre?: string;
    fontCategory?: string;
    mood?: string;
    q?: string;
    page?: string;
  }>;
};

type Filters = {
  genres: string[];
  fontCategories: string[];
  moods: string[];
};

const ITEMS_PER_PAGE = 12;

async function Library({ searchParams }: Props) {
  const { genre, subgenre, fontCategory, mood, q, page } = await searchParams;

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

  const currentPage = Number(page ?? 1);

  const pagination = paginate(filteredPairings, currentPage, ITEMS_PER_PAGE);

  return (
    <Search
      filteredPairings={pagination.items}
      filters={filters}
      currentPage={pagination.currentPage}
      totalPages={pagination.totalPages}
    />
  );
}

export default Library;
