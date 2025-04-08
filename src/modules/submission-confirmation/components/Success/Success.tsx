import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import Button from "src/ui-kit/Button";
import Feedback from "src/ui-kit/Feedback";

/**
 * Successful form submission
 * confirmation.
 */
function Success() {
  const { dispatch } = useAccommodationFormContext();

  /**
   * Resets form to the initial state
   * so that the use could
   * add another accommodation.
   */
  const onReset = () => dispatch({ type: ActionType.ResetForm });

  return (
    <Feedback
      title="Success!"
      message="The form has been submitted successfully"
      kind="success"
      action={<Button onClick={onReset}>Add another accommodation</Button>}
    />
  );
}

export default Success;
