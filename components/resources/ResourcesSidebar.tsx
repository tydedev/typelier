"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import type { ContentItem } from "@/lib/content";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  updateFilter: (key: string, value: string) => void;
  clearFilters: () => void;
  selectedCategory: string;
  shopItems: ContentItem[];
};

const categories = ["Book Formatting", "Book Design", "Typography"];

export default function ResourcesSidebar({
  query,
  setQuery,
  updateFilter,
  clearFilters,
  selectedCategory,
  shopItems,
}: Props) {
  const latestShop = shopItems.slice(0, 4);

  const isFiltering = Boolean(query || selectedCategory);

  return (
    <div>
      {/* Search */}
      <section className="border-t border-foreground/15 pt-4">
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
      </section>

      {/* Categories */}
      <section className="mt-8 border-t border-foreground/15 pt-4 md:mt-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em]">
          Categories
        </p>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 md:flex-col md:gap-0 md:overflow-visible md:pb-0">
          <button
            type="button"
            onClick={() => updateFilter("category", "all")}
            className={`shrink-0 border px-3 py-2 text-left text-xs transition-colors md:border-0 md:border-b md:px-0 md:py-3 md:text-sm ${
              !selectedCategory
                ? "border-foreground bg-foreground text-background md:bg-transparent md:text-foreground"
                : "border-foreground/15 hover:border-foreground/40"
            }`}
          >
            All resources
          </button>

          {categories.map((category) => {
            const active =
              selectedCategory.toLowerCase() === category.toLowerCase();

            return (
              <button
                key={category}
                type="button"
                onClick={() => updateFilter("category", category)}
                className={`shrink-0 border px-3 py-2 text-left text-xs transition-colors md:border-0 md:border-b md:px-0 md:py-3 md:text-sm ${
                  active
                    ? "border-foreground bg-foreground text-background md:bg-transparent md:text-foreground"
                    : "border-foreground/15 hover:border-foreground/40"
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>
      </section>

      {/* Shop — desktop only */}
      {latestShop.length > 0 && (
        <section className="mt-10 hidden border-t border-foreground/15 pt-4 md:block">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.15em]">
              From the Shop
            </p>

            <Link
              href="/shop"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              View all →
            </Link>
          </div>

          <div className="mt-4">
            {latestShop.map((item, index) => (
              <Link
                key={item.slug}
                href={`/shop/${item.slug}`}
                className="group block border-b border-foreground/10 py-4"
              >
                <div className="flex gap-3">
                  <span className="pt-0.5 font-mono text-[10px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base leading-tight">
                      {item.metadata.title}
                    </h3>

                    {item.metadata.category && (
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {item.metadata.category}
                      </p>
                    )}
                  </div>

                  <span className="self-center text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
