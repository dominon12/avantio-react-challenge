import type { ComponentPropsWithoutRef } from "react";

type BaseButtonProps = ComponentPropsWithoutRef<"button">;

type ButtonProps = Omit<BaseButtonProps, "className">;

/**
 * Primary button.
 */
function Button(props: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded transition 
               hover:bg-blue-700 
               disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
      {...props}
    />
  );
}

export { Button };
