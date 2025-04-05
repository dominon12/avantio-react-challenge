import type { ComponentPropsWithoutRef } from "react";

type BaseLabelProps = ComponentPropsWithoutRef<"label">;

type LabelProps = Omit<BaseLabelProps, "className">;

/**
 * Form field label.
 */
function Label(props: LabelProps) {
  return (
    <label
      className="text-sm font-medium text-gray-700 cursor-pointer"
      {...props}
    />
  );
}

export default Label;
