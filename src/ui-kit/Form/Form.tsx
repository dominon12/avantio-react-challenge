import type { FormEventHandler, ReactNode, Ref } from "react";

import Title from "../Title";
import Button from "../Button";

type FormProps = {
  // new way to pass refs since React 19
  ref?: Ref<HTMLFormElement>;
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
    ref,
    title,
    children,
    submitText = "Submit",
    canSubmit = true,
    onSubmit,
  } = props;

  return (
    <section className="flex flex-col h-full">
      <Title>{title}</Title>
      <form ref={ref} onSubmit={onSubmit} className="flex flex-col grow">
        <div className="grow mb-8 flex flex-col gap-3">{children}</div>
        <Button type="submit" disabled={!canSubmit}>
          {submitText}
        </Button>
      </form>
    </section>
  );
}

export default Form;
