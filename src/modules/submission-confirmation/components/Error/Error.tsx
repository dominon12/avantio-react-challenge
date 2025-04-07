import Feedback from "src/ui-kit/Feedback";

/**
 * Error form submission
 * confirmation.
 */
function Error() {
  return (
    <Feedback
      title="Error!"
      message="Couldn't submit the form. Please try again later."
      kind="error"
    />
  );
}

export default Error;
