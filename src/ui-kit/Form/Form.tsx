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
    <section className="flex flex-col h-full">
      <Title>{title}</Title>
      <form onSubmit={onSubmit} className="flex flex-col grow">
        <div className="grow mb-8 flex flex-col gap-3">{children}</div>
        <Button type="submit" disabled={!canSubmit}>
          {submitText}
        </Button>
      </form>
    </section>
  );
}

export default Form;
