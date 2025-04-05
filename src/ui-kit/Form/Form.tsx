import type { FormEventHandler, ReactNode } from "react";

import Title from "../Title";

type FormProps = {
  title: string;
  children: ReactNode;
  submitText?: string;
  canSubmit?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

/**
 * Renders a form.
 */
function Form(props: FormProps) {
  const {
    title,
    children,
    submitText = "Submit",
    canSubmit = true,
    onSubmit,
  } = props;

  return (
    <section className="mx-auto max-w-sm p-6">
      <Title>{title}</Title>
      <form onSubmit={onSubmit}>
        <div>{children}</div>
        <button type="submit" disabled={!canSubmit}>
          {submitText}
        </button>
      </form>
    </section>
  );
}

export default Form;
