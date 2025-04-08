import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";
import Success from "../Success";
import Error from "../Error";
import WithAnimatedAppearance from "src/ui-kit/WithAnimatedAppearance";
import Button from "src/ui-kit/Button";
import ActionType from "src/modules/accommodation-form-full/store/action-type";

const componentResultMap: Record<SubmissionResult, typeof Success> = {
  [SubmissionResult.Success]: Success,
  [SubmissionResult.Error]: Error,
};

/**
 * Shows submission confirmation
 * based on the state.
 */
function Confirmation() {
  const {
    state: { result = SubmissionResult.Error },
    dispatch,
  } = useAccommodationFormContext();

  const FeedbackComponent = componentResultMap[result];

  const onReset = () => dispatch({ type: ActionType.ResetForm });

  return (
    <WithAnimatedAppearance>
      <FeedbackComponent
        action={<Button onClick={onReset}>Add another accommodation</Button>}
      />
    </WithAnimatedAppearance>
  );
}

export default Confirmation;
