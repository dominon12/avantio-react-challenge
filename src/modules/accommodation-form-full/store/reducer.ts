import FormStep from "../types/form-step";
import Action from "./action";
import ActionType from "./action-type";
import initialState from "./initial-state";
import StoreState from "./state-type";

function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case ActionType.AccommodationFormSubmitted:
      return {
        ...state,
        step: FormStep.Owner,
        accommodation: action.payload,
      };
    case ActionType.OwnerFormSubmitted:
      return {
        ...state,
        step: FormStep.Summary,
        owner: action.payload,
      };
    case ActionType.FormSummaryAccepted:
      return {
        ...state,
        step: FormStep.Confirmation,
        result: action.payload.result,
      };
    case ActionType.ResetForm:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
