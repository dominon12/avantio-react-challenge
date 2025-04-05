import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

/**
 * Renders first-level
 * page title.
 */
function Title(props: TitleProps) {
  const { children } = props;

  return <h1 className="text-4xl font-bold text-gray-800 mb-4">{children}</h1>;
}

export default Title;
