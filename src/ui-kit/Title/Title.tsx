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

  return <h1 className="mb-4 text-4xl font-bold text-gray-800">{children}</h1>;
}

export default Title;
