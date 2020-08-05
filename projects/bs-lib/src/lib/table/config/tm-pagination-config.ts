export interface TmPaginationConfig {

  itemsPerPage?: number;
  maxPageLinks?: number;
  onPageChange: (page: number) => any;
}
