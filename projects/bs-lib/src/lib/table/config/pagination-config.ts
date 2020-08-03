export interface PaginationConfig {

  itemsPerPage?: number;
  maxPageLinks?: number;
  onPageChange: (page: number) => any;
}
