import {TmSelectOption} from "./tm-select-option";

export interface TmInput {

  type: string;
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  selectOptions?: TmSelectOption[];
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
