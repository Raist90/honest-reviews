interface Pagination {
  page: number;
  limit: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface MetaType {
  pagination: Pagination;
}
