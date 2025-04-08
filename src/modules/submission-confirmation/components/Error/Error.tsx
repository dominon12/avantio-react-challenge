import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import Button from "src/ui-kit/Button";
import Feedback from "src/ui-kit/Feedback";

/**
 * Error form submission
 * confirmation.
 */
function Error() {
  const { dispatch } = useAccommodationFormContext();

  /**
   * Goes back to the summary step
   * so that the user could try
   * submitting the form again.
   */
  const onBack = () => dispatch({ type: ActionType.BackToSummary });

  return (
    <Feedback
      title="Error!"
      message="Couldn't submit the form. Please try again later."
      kind="error"
      action={<Button onClick={onBack}>Go Back</Button>}
    />
  );
}

export default Error;
