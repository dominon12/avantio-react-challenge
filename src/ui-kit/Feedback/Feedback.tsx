import type { ReactNode } from "react";

import Title from "../Title";

type FeedbackKind = "success" | "error";

const kindColorMap: Record<FeedbackKind, string> = {
  success: "green",
  error: "red",
};

type FeedbackProps = {
  title: ReactNode;
  message: ReactNode;
  kind: FeedbackKind;
};

function Feedback(props: FeedbackProps) {
  const { title, message, kind } = props;

  const color = kindColorMap[kind];

  /** tailwind classes to include */
  // bg-red-50 text-red-700 text-red-800
  // bg-green-50 text-green-700 text-green-800

  return (
    <section
      className={`flex h-full flex-col items-center justify-center p-4 text-center bg-${color}-50 text-${color}-700`}
    >
      <Title>{title}</Title>
      <p className={`mt-1 text-sm text-${color}-800`}>{message}</p>
    </section>
  );
}

export default Feedback;
