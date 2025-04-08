import Feedback from "src/ui-kit/Feedback";

/**
 * Successful form submission
 * confirmation.
 */
function Success() {

  return (
    <Feedback
      title="Success!"
      message="The form has been submitted successfully"
      kind="success"
    />
  );
}

export default Success;
