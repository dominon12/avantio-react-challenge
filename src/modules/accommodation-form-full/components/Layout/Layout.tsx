import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

/**
 * Multi-step form layout.
 */
function Layout(props: LayoutProps) {
  const { children } = props;

  return <main className="mx-auto h-dvh max-w-sm p-6">{children}</main>;
}

export default Layout;
