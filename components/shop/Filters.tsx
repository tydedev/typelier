import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  updateFilter: (key: string, value: string) => void;
  clearFilters: () => void;
  selectedFilters: string;
};

const Filters = ({
  query,
  setQuery,
  updateFilter,
  clearFilters,
  selectedFilters,
}: Props) => {
  const isFiltering = Boolean(query || selectedFilters);
  const t = useTranslations("Shop");

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Search
        </p>

        {isFiltering && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-4">
        <Input
          placeholder={t("searchItems")}
          value={query}
          onChange={(e) => {
            const value = e.target.value;

            setQuery(value);
            updateFilter("q", value);
          }}
          className="h-auto rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-sm shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />
      </div>
    </div>
  );
};

export default Filters;
