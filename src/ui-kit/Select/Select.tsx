import type { ComponentPropsWithoutRef } from "react";

import { inputBaseClass } from "../shared/input-styles";

type BaseSelectProps = ComponentPropsWithoutRef<"select">;

type SelectProps = Omit<BaseSelectProps, "className">;

/**
 * Select component.
 */
function Select(props: SelectProps) {
  return <select className={`${inputBaseClass} capitalize`} {...props} />;
}

export default Select;
