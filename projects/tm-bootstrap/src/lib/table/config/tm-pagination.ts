export interface TmPagination {

  itemsPerPage?: number;
  maxPageLinks?: number;
  onPageChange: (page: number) => any;
}
