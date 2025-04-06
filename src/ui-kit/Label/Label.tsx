import type { ComponentPropsWithoutRef } from "react";

type BaseLabelProps = ComponentPropsWithoutRef<"label">;

type LabelProps = Omit<BaseLabelProps, "className"> & {
  isRequired?: boolean;
};

/**
 * Form field label.
 */
function Label(props: LabelProps) {
  const { isRequired, children, ...labelProps } = props;

  return (
    <label
      className="text-sm font-medium text-gray-700 cursor-pointer"
      {...labelProps}
    >
      {children}
      {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
}

export default Label;
