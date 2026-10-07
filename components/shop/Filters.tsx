import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  search: () => void;
  clearFilters: () => void;
  selectedFilters: string;
};

const Filters = ({
  query,
  setQuery,
  search,
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        className="mt-4 flex gap-3"
      >
        <Input
          placeholder={t("searchItems")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-auto rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-sm shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />

        <Button
          type="submit"
          variant="ghost"
          className="shrink-0 rounded-none px-2 text-xs self-center cursor-pointer"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Filters;
