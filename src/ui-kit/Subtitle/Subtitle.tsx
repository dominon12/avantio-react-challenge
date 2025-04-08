import { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
};

/**
 * Renders second-level page title.
 */
function Subtitle(props: SubtitleProps) {
  const { children } = props;

  return <h1 className="mb-3 text-2xl font-bold text-gray-600">{children}</h1>;
}

export default Subtitle;
