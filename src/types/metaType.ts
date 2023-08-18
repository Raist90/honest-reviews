type Pagination = {
  page: number;
  limit: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

type MetaType = {
  pagination: Pagination;
};

export default MetaType;
