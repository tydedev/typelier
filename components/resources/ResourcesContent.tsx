"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FeaturedResources from "@/components/resources/FeaturedResources";
import SearchResults from "@/components/resources/SearchResults";
import ResourcesSidebar from "@/components/resources/ResourcesSidebar";
import ResourceList from "@/components/resources/ResourceList";
import type { ContentItem } from "@/lib/content";
import { useTranslations } from "next-intl";

type Props = {
  resources: ContentItem[];
  shopItems: ContentItem[];
};

export default function ResourcesContent({ resources, shopItems }: Props) {
  const t = useTranslations("Blog");
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";

  const [query, setQuery] = useState(initialQuery);

  const featured = resources
    .filter((item) => item.metadata.featured)
    .slice(0, 2);

  const latest = resources.filter(
    (item) => !featured.some((featuredItem) => featuredItem.slug === item.slug),
  );

  const filteredResources = useMemo(() => {
    const search = query.toLowerCase().trim();
    const category = selectedCategory.toLowerCase().trim();

    return resources.filter((item) => {
      const { title, description, category: itemCategory } = item.metadata;

      const matchesQuery =
        !search ||
        [title, description, itemCategory]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(search));

      const matchesCategory =
        !category || itemCategory.toLowerCase() === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory, resources]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `/resources?${queryString}` : "/resources");

    if (key === "q") {
      setQuery(value);
    }
  };

  const clearFilters = () => {
    setQuery("");
    router.push("/resources");
  };

  const isFiltering = query.trim().length > 0 || selectedCategory.length > 0;

  return (
    <div className="pt-12 md:pt-20">
      {/* Mobile filters */}
      <div className="md:hidden">
        <ResourcesSidebar
          query={query}
          setQuery={setQuery}
          updateFilter={updateFilter}
          clearFilters={clearFilters}
          selectedCategory={selectedCategory}
          shopItems={shopItems}
        />
      </div>

      <div className="flex flex-col pt-20 md:grid md:grid-cols-8 lg:grid-cols-12">
        <main className="md:col-span-5 lg:col-span-8">
          {isFiltering ? (
            filteredResources.length > 0 ? (
              <SearchResults items={filteredResources} query={query} />
            ) : (
              <div className="border-t border-foreground/15 pt-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {t("searchResults")}
                </p>

                <p className="mt-6 font-serif text-3xl tracking-tight">
                  {t("noResults")}
                  {query && (
                    <>
                      {" "}
                      {t("for")} “{query}”
                    </>
                  )}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t("noResultsDescription")}
                </p>
              </div>
            )
          ) : (
            <>
              {featured.length > 0 && <FeaturedResources items={featured} />}

              {latest.length > 0 && (
                <div className="mt-20 md:mt-24">
                  <ResourceList items={latest} />
                </div>
              )}
            </>
          )}
        </main>

        {/* Desktop sidebar */}
        <aside className="hidden h-fit md:col-span-3 md:block md:col-start-6 lg:col-span-3 lg:col-start-10">
          <ResourcesSidebar
            query={query}
            setQuery={setQuery}
            updateFilter={updateFilter}
            clearFilters={clearFilters}
            selectedCategory={selectedCategory}
            shopItems={shopItems}
          />
        </aside>
      </div>
    </div>
  );
}
