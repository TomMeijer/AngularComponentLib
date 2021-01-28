import {Observable, Subject} from "rxjs";

export interface TmNgSelect {

  items: any[] | Observable<any[]>;
  bindLabel?: string;
  bindValue?: string;
  clearable?: boolean;
  searchable?: boolean;
  optionTemplate?: (item) => string;
  labelTemplate?: (item) => string;
  searchFn?: (term: string, item: any) => boolean;
  typeAhead?: Subject<string>;
}
