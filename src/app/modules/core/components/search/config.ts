import { IconComponentModel } from "../icon/icon.component.model";
import { InputComponentModel, InputType } from "../input/input.component.model";

export const searchInputConfig: InputComponentModel = {
  label: 'search',
  inputType: InputType.SEARCH,
  isMatInput: false,
  className: 'input-search'
};

export const searchIconConfig: IconComponentModel = {
  name: "search"
};
