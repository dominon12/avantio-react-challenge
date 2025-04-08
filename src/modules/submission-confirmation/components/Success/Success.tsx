import Feedback from "src/ui-kit/Feedback";
import { FeedbackProps } from "src/ui-kit/Feedback/Feedback";

type SuccessProps = Required<Pick<FeedbackProps, "action">>;

/**
 * Successful form submission
 * confirmation.
 */
function Success(props: SuccessProps) {
  const { action } = props;

  return (
    <Feedback
      title="Success!"
      message="The form has been submitted successfully"
      kind="success"
      action={action}
    />
  );
}

export default Success;
