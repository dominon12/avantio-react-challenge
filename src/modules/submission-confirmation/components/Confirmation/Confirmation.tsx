import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";
import Success from "../Success";
import Error from "../Error";

/**
 * Shows submission confirmation
 * based on the state.
 */
function Confirmation() {
  const {
    state: { result = SubmissionResult.Error },
  } = useAccommodationFormContext();

  switch (result) {
    case SubmissionResult.Success:
      return <Success />;
    case SubmissionResult.Error:
    default:
      return <Error />;
  }
}

export default Confirmation;
