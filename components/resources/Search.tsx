"use client";

import { Input } from "@/components/ui/input";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  updateFilter: (key: string, value: string) => void;
};

export default function Search({ query, setQuery, updateFilter }: Props) {
  return (
    <div className="sticky top-8">
      <div className="border-t border-foreground/15 pt-4">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Search
        </p>

        <div className="mt-5">
          <Input
            placeholder="Search resources..."
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

      <div className="mt-10 border-t border-foreground/15 pt-4">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Browse
        </p>

        <nav className="mt-5 flex flex-col">
          <button
            type="button"
            onClick={() => updateFilter("category", "all")}
            className="flex items-center justify-between border-b border-foreground/10 py-3 text-left text-sm transition-colors hover:text-muted-foreground"
          >
            <span>All resources</span>
            <span className="font-mono text-[10px] text-muted-foreground">
              →
            </span>
          </button>

          <button
            type="button"
            onClick={() => updateFilter("category", "articles")}
            className="flex items-center justify-between border-b border-foreground/10 py-3 text-left text-sm transition-colors hover:text-muted-foreground"
          >
            <span>Articles</span>
            <span className="font-mono text-[10px] text-muted-foreground">
              →
            </span>
          </button>

          <button
            type="button"
            onClick={() => updateFilter("category", "guides")}
            className="flex items-center justify-between border-b border-foreground/10 py-3 text-left text-sm transition-colors hover:text-muted-foreground"
          >
            <span>Guides</span>
            <span className="font-mono text-[10px] text-muted-foreground">
              →
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
