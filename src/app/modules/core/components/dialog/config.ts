import { InputComponentModel, InputType } from "../input/input.component.model";

export const nameInputConfig: InputComponentModel = {
  label: "Enter Your Name",
  inputType: InputType.TEXT,
  isMatInput: true
};

export const emailInputConfig: InputComponentModel = {
  label: "Enter EmailID",
  inputType: InputType.EMAIL,
  isMatInput: true
};

export const passwordInputConfig: InputComponentModel = {
  label: "Enter Password",
  inputType: InputType.PASSWORD,
  isMatInput: true
};

export const confirmPasswordInputConfig: InputComponentModel = {
  label: "Confirm Password",
  inputType: InputType.PASSWORD,
  isMatInput: true
};
