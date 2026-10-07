"use client";

import Heading from "../global/Heading";
import PairingList from "./PairingList";
import LibraryToolbar from "./LibraryToolbar";
import LibraryFilters from "./LibraryFilters";
import Pagination from "../ui/Pagination";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

import { Pairing } from "@/types/pairing";

type Filters = {
  genres: string[];
  fontCategories: string[];
  moods: string[];
};

type Props = {
  filteredPairings: Pairing[];
  filters: Filters;
  currentPage: number;
  totalPages: number;
};

const views = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-4",
};

export default function Search({
  filteredPairings,
  filters,
  currentPage,
  totalPages,
}: Props) {
  const t = useTranslations("Library");

  const router = useRouter();
  const searchParams = useSearchParams();

  const [view, setView] = useState(views[4]);
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const displayedPairings = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) {
      return filteredPairings;
    }

    return filteredPairings.filter((pairing) => {
      const searchableValues = [
        pairing.classification?.type,
        pairing.classification?.genre,
        pairing.classification?.subgenre,
        ...(pairing.mood ?? []),
        pairing.style,
        pairing.fonts?.heading,
        pairing.fonts?.body,
      ];

      return searchableValues
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    });
  }, [query, filteredPairings]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `/library?${queryString}` : "/library", {
      scroll: false,
    });
  };

  const search = () => {
    updateFilter("q", query.trim());
  };

  const changeView = (columns: keyof typeof views) => {
    setView(views[columns]);
  };

  const resetFilters = () => {
    setQuery("");

    router.replace("/library", {
      scroll: false,
    });
  };

  return (
    <>
      <Heading>{t("title")}</Heading>

      <div className="mb-10 rounded-xl border border-foreground/10 bg-background/50 p-6">
        <div className="flex flex-col gap-6">
          <LibraryToolbar
            query={query}
            setQuery={setQuery}
            search={search}
            changeView={changeView}
          />

          <LibraryFilters
            filters={filters}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
          />
        </div>
      </div>

      <div className={`grid ${view} gap-4`}>
        {displayedPairings.length === 0 ? (
          <p className="col-span-full text-center">{t("no_results")}</p>
        ) : (
          <PairingList pairings={displayedPairings} />
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
