import type { FC } from "react";

import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";
import Success from "../Success";
import Error from "../Error";
import WithAnimatedAppearance from "src/ui-kit/WithAnimatedAppearance";

const componentResultMap: Record<SubmissionResult, FC> = {
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
  } = useAccommodationFormContext();

  const FeedbackComponent = componentResultMap[result];

  return (
    <WithAnimatedAppearance>
      <FeedbackComponent />
    </WithAnimatedAppearance>
  );
}

export default Confirmation;
