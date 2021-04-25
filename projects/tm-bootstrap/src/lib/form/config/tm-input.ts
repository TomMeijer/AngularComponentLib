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
  onChange?: (event: any) => void;
  pattern?: string;
  textareaRows?: number;
  tooltip?: string;
  prependText?: string | (() => any);
  prependIcon?: string | (() => string);
  appendText?: string | (() => any);
  appendIcon?: string | (() => string);
  group?: string;
  hidden?: boolean;
  className?: string;
  disabled?: boolean
  readOnly?: boolean
}
