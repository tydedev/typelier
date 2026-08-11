"use client";

import Heading from "../global/Heading";
import PairingList from "./PairingList";
import LibraryToolbar from "./LibraryToolbar";
import LibraryFilters from "./LibraryFilters";
import Pagination from "../ui/Pagination";

import { useTranslations } from "next-intl";
import { useState } from "react";
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

  const [view, setView] = useState(views[4]);
  const [query, setQuery] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Quando cambia un filtro, torniamo alla prima pagina.
    params.delete("page");

    router.push(`/library?${params.toString()}`, {
      scroll: false,
    });
  };

  const changeView = (columns: keyof typeof views) => {
    setView(views[columns]);
  };

  return (
    <>
      <Heading>{t("title")}</Heading>

      <div className="mb-10 rounded-xl border border-foreground/10 bg-background/50 p-6">
        <div className="flex flex-col gap-6">
          <LibraryToolbar
            query={query}
            setQuery={setQuery}
            updateFilter={updateFilter}
            changeView={changeView}
          />

          <LibraryFilters filters={filters} updateFilter={updateFilter} />
        </div>
      </div>

      <div className={`grid ${view} gap-4`}>
        {filteredPairings.length === 0 ? (
          <p className="col-span-full text-center">{t("no_results")}</p>
        ) : (
          <PairingList pairings={filteredPairings} />
        )}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
