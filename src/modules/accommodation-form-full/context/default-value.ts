import FormStep from "../types/form-step";
import type ContextValue from "./value-type";

const defaultValue: ContextValue = {
  state: {
    step: FormStep.Accommodation,
  },
  dispatch: () => {},
};

export default defaultValue;
