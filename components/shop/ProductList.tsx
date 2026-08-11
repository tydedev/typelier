"use client";

import { ContentItem } from "@/lib/content";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ShopFilters from "./ShopFilter";
import { useTranslations } from "next-intl";

type Props = {
  items: ContentItem[];
  title?: string;
};

const ProductList = ({ items }: Props) => {
  const t = useTranslations("Shop");
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);

  const getFilters = (key: string) => {
    const value = searchParams.get(key);

    return value ? value.split("+").filter(Boolean) : [];
  };

  const selectedCategories = getFilters("category");
  const selectedFormats = getFilters("format");

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        items
          .map((item) => item.metadata.shopCategory)
          .filter(Boolean)
          .map((value) => value!.toLowerCase()),
      ),
    );
  }, [items]);

  const formats = useMemo(() => {
    return Array.from(
      new Set(
        items
          .map((item) => item.metadata.format)
          .filter(Boolean)
          .map((value) => value!.toLowerCase()),
      ),
    );
  }, [items]);

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `/shop?${queryString}` : "/shop", {
      scroll: false,
    });

    setQuery(value);
  };

  const clearFilters = () => {
    setQuery("");

    router.replace("/shop", {
      scroll: false,
    });
  };

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete("page");
    const queryString = params.toString();
    router.replace(queryString ? `/shop?${queryString}` : "/shop", {
      scroll: false,
    });
  };

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();

    return items
      .filter((item) => {
        const title = item.metadata.title?.toLowerCase() ?? "";
        const description = item.metadata.description?.toLowerCase() ?? "";

        const category = item.metadata.shopCategory?.trim().toLowerCase() ?? "";

        const format = item.metadata.format?.trim().toLowerCase() ?? "";

        const matchesQuery =
          !search ||
          title.includes(search) ||
          description.includes(search) ||
          category.includes(search) ||
          format.includes(search);

        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(category);

        const matchesFormat =
          selectedFormats.length === 0 || selectedFormats.includes(format);

        return matchesQuery && matchesCategory && matchesFormat;
      })
      .sort((a, b) => {
        if (!a.metadata.date) return 1;
        if (!b.metadata.date) return -1;

        return (
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime()
        );
      });
  }, [items, query, selectedCategories, selectedFormats]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col gap-6 md:col-span-full md:flex-row md:items-end">
        <div className="flex-1">
          <Filters
            query={query}
            setQuery={setQuery}
            updateFilter={(key, value) => {
              if (key === "q") {
                updateQuery(value);
              }
            }}
            clearFilters={clearFilters}
            selectedFilters=""
          />
        </div>

        <div className="flex gap-2 w-1/2">
          <ShopFilters
            label={t("category")}
            filterKey="category"
            options={categories}
            updateFilter={updateFilter}
          />

          <ShopFilters
            label={t("format")}
            filterKey="format"
            options={formats}
            updateFilter={updateFilter}
          />
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground md:ml-4 md:mt-0">
          {t("noResults")}
        </p>
      ) : (
        filteredResources.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))
      )}
    </div>
  );
};

export default ProductList;
