import { useEffect, useState } from "react";
import { type ReactNode } from "react";

type WithAnimatedAppearanceProps = {
  children: ReactNode;
};

/**
 * Animates `children` element appearance
 * with a simple fade-in animation.
 */
function WithAnimatedAppearance(props: WithAnimatedAppearanceProps) {
  const { children } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    // small delay to trigger transition
    const timeout = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out transform h-full ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default WithAnimatedAppearance;
