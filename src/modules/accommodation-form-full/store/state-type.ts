import Accommodation from "src/modules/accommodation-form/types/accommodation";
import FormStep from "../types/form-step";
import Owner from "src/modules/owner-form/types/owner";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";

type StoreState = {
  step: FormStep;
  accommodation?: Accommodation;
  owner?: Partial<Owner>;
  result?: SubmissionResult;
};

export default StoreState;
