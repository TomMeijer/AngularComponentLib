export interface TmNgSelect {

  items: any[]
  bindLabel?: string;
  bindValue?: string;
  clearable?: boolean;
  searchable?: boolean;
  optionTemplate?: (item) => string;
  labelTemplate?: (item) => string;
}
