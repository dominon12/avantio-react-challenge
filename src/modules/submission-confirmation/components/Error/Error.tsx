import Feedback from "src/ui-kit/Feedback";
import { FeedbackProps } from "src/ui-kit/Feedback/Feedback";

type ErrorProps = Required<Pick<FeedbackProps, "action">>;

/**
 * Error form submission
 * confirmation.
 */
function Error(props: ErrorProps) {
  const { action } = props;

  return (
    <Feedback
      title="Error!"
      message="Couldn't submit the form. Please try again later."
      kind="error"
      action={action}
    />
  );
}

export default Error;
