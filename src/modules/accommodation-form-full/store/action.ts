import ActionType from "./action-type";
import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import type Owner from "src/modules/owner-form/types/owner";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";

// map action types to payloads
// so reducer infers payload type
// based on action type
type ActionPayloadMap = {
  [ActionType.AccommodationFormSubmitted]: Accommodation;
  [ActionType.OwnerFormSubmitted]: Owner;
  [ActionType.FormSummaryAccepted]: {
    result: SubmissionResult;
  };
  [ActionType.BackToAccommodation]: Partial<Owner>;
  [ActionType.ResetForm]: void;
};

// create `Action` type
// from the map above
type Action<K extends keyof ActionPayloadMap = keyof ActionPayloadMap> = {
  [T in K]: ActionPayloadMap[T] extends void
    ? { type: T }
    : { type: T; payload: ActionPayloadMap[T] };
}[K];

export default Action;
