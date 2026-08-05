import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";

import GenreSelect from "./GenreSelect";
import FontCategorySelect from "./FontCategorySelect";
import MoodCombobox from "./MoodCombobox";

type Filters = {
  genres: string[];
  fontCategories: string[];
  moods: string[];
};

type Props = {
  filters: Filters;
  updateFilter: (key: string, value: string) => void;
};

export default function LibraryFilters({ filters, updateFilter }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <GenreSelect genres={filters.genres} updateFilter={updateFilter} />

      <FontCategorySelect
        categories={filters.fontCategories}
        updateFilter={updateFilter}
      />

      <MoodCombobox moods={filters.moods} updateFilter={updateFilter} />

      <div className="flex items-end">
        <Button
          variant="ghost"
          className="w-full gap-2"
          onClick={() => (window.location.href = "/library")}
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
