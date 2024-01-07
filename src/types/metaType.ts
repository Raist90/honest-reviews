type Pagination = {
  page: number;
  limit: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

export type MetaType = {
  pagination: Pagination;
};

