import { Pairing } from "@/types/pairing";

export type Filters = {
  genres: string[];
  fontCategories: string[];
  moods: string[];
};

export type LibrarySearchProps = {
  filteredPairings: Pairing[];
  filters: Filters;
};
