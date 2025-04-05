import { useId } from "react";
import type { ReactNode } from "react";

import Label from "../Label";

type FormFieldProps = {
  label: string;
  children: (inputId: string) => ReactNode;
};

/**
 * Universal form field wrapper
 * that renders a label.
 */
function FormField(props: FormFieldProps) {
  const { label, children } = props;

  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{label}</Label>
      {children(id)}
    </div>
  );
}

export default FormField;
