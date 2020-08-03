import {Column} from './column';
import {PaginationConfig} from './pagination-config';

export interface TableConfig {

  id: string;
  striped?: boolean;
  bordered?: boolean;
  small?: boolean;
  hover?: boolean;
  className?: string;
  columns: Column[];
  pagination?: PaginationConfig;
}
