export type PaginationResult<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export function paginate<T>(
  items: T[],
  page = 1,
  perPage = 12,
): PaginationResult<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const safePage = Number.isFinite(page) ? Math.floor(page) : 1;
  const currentPage = Math.max(1, Math.min(safePage, Math.max(totalPages, 1)));

  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}
