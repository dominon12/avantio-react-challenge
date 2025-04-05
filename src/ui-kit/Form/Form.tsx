import type { FormEventHandler, ReactNode } from "react";

import Title from "../Title";
import Button from "../Button";

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
    <section className="mx-auto max-w-sm p-6 h-dvh flex flex-col">
      <Title>{title}</Title>
      <form onSubmit={onSubmit} className="flex flex-col grow">
        <div className="grow mb-8">{children}</div>
        <Button type="submit" disabled={!canSubmit}>
          {submitText}
        </Button>
      </form>
    </section>
  );
}

export default Form;
