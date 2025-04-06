import type { ReactNode } from "react";

type FieldErrorProps = {
  children: ReactNode;
};

/**
 * Renders error message.
 */
function FieldError(props: FieldErrorProps) {
  const { children } = props;

  return <span className="text-red-400 text-xs">{children}</span>;
}

export default FieldError;
