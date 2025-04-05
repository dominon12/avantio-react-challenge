import type { ComponentPropsWithoutRef } from "react";

import { inputBaseClass } from "../shared/input-styles";

type BaseInputProps = ComponentPropsWithoutRef<"input">;

type InputProps = Omit<BaseInputProps, "className">;

/**
 * Input component.
 */
function Input(props: InputProps) {
  return <input className={inputBaseClass} {...props} />;
}

export default Input;
