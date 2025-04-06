import { useId } from "react";
import type { ReactNode } from "react";

import Label from "../Label";
import FieldError from "../FieldError";

type FormFieldProps = {
  label: string;
  children: (inputId: string) => ReactNode;
  isRequired?: boolean;
  error?: ReactNode;
};

/**
 * Universal form field wrapper
 * that renders a label.
 */
function FormField(props: FormFieldProps) {
  const { label, children, isRequired, error } = props;

  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} isRequired={isRequired}>
        {label}
      </Label>
      {children(id)}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

export default FormField;
