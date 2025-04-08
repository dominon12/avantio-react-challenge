import type { ComponentPropsWithoutRef } from "react";

type BaseButtonProps = ComponentPropsWithoutRef<"button">;

type ButtonProps = BaseButtonProps;

/**
 * Primary button.
 */
function Button(props: ButtonProps) {
  const { className, ...buttonProps } = props;

  return (
    <button
      className={`cursor-pointer rounded bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-100 disabled:opacity-70 ${className}`}
      {...buttonProps}
    />
  );
}

export { Button };
