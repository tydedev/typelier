"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const getPageNumbers = (
  currentPage: number,
  totalPages: number,
): (number | "...")[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const query = params.toString();

    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-between gap-1 bg-foreground/5 px-4 py-3 sm:px-6"
    >
      {currentPage > 1 && (
        <Button
          variant="outline"
          onClick={() => goToPage(currentPage - 1)}
          aria-label={locale === "en" ? "Previous page" : "Pagina precedente"}
          className="inline-flex h-9 items-center justify-center px-3"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
        </Button>
      )}

      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center"
              >
                …
              </span>
            );
          }

          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-current={isCurrent ? "page" : undefined}
              disabled={isCurrent}
              className={`inline-flex h-9 w-9 items-center justify-center ${
                isCurrent ? "font-medium" : "hover:underline"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <Button
          variant="outline"
          onClick={() => goToPage(currentPage + 1)}
          aria-label={locale === "en" ? "Next page" : "Pagina successiva"}
          className="inline-flex h-9 items-center justify-center px-3"
        >
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </nav>
  );
};

export default Pagination;
