import {TmNgSelect} from "./tm-ng-select";
import {TmSelect} from "./tm-select";

export interface TmInput {

  type: string;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  select?: TmSelect;
  ngSelect?: TmNgSelect;
  onChange?: (event: Event) => any;
  pattern?: string;
  textareaRows?: number;
  tooltip?: string;
  prependText?: string;
  prependIcon?: string;
  appendText?: string;
  appendIcon?: string;
  group?: string
}
