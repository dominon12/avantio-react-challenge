import type { ComponentPropsWithoutRef } from "react";

import { inputBaseClass } from "../shared/input-styles";

type BaseTextAreaProps = ComponentPropsWithoutRef<"textarea">;

type TextAreaProps = Omit<BaseTextAreaProps, "className">;

/**
 * Textarea component.
 */
function TextArea(props: TextAreaProps) {
  return <textarea className={inputBaseClass} {...props} />;
}

export default TextArea;
