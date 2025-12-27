export type SelectionType = {
  id: number;
  value: number | string;
  label: string;
};

export type PaginationResponse = {
  totalItems: number;
  totalPages: number;
  hasPrev: boolean;
  limit: number;
  hasNext: boolean;
  currentPage: number;
};
