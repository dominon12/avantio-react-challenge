import type { FormEventHandler, ReactNode, Ref } from "react";

import Title from "../Title";
import Button from "../Button";

type FormStepProps = {
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
function FormStep(props: FormStepProps) {
  const {
    ref,
    title,
    children,
    submitText = "Submit",
    canSubmit = true,
    onSubmit,
  } = props;

  return (
    <section className="flex h-full flex-col">
      <Title>{title}</Title>
      <form ref={ref} onSubmit={onSubmit} className="flex grow flex-col">
        <div className="mb-8 flex grow flex-col gap-3">{children}</div>
        <Button type="submit" disabled={!canSubmit}>
          {submitText}
        </Button>
      </form>
    </section>
  );
}

export default FormStep;
