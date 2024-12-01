import { FormControl, FormGroup } from "@angular/forms";

export interface InputComponentModel {
  label: string;
  inputType: InputType;
  isMatInput: boolean;
  className?: string;
}

export enum InputType {
  TEXT = 'TEXT',
  EMAIL = 'EMAIL',
  SEARCH = 'SEARCH',
  PASSWORD = 'PASSWORD'
}

export const INPUT_TYPE_MAPPER: { [key: string]: string; } = {};

INPUT_TYPE_MAPPER[InputType.TEXT] = 'text';
INPUT_TYPE_MAPPER[InputType.EMAIL] = 'email';
INPUT_TYPE_MAPPER[InputType.SEARCH] = 'search';
INPUT_TYPE_MAPPER[InputType.PASSWORD] = 'password';
