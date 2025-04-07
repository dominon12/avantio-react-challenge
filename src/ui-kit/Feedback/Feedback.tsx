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

  return (
    <section
      className={`flex flex-col items-center justify-center text-center p-6 border rounded-2xl shadow-md bg-green-50 text-${color}-700`}
    >
      <Title>{title}</Title>
      <p className={`mt-1 text-sm text-${color}-800`}>{message}</p>
    </section>
  );
}

export default Feedback;
