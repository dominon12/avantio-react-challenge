import type { FormEventHandler } from "react";

import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import Form from "src/ui-kit/Form";
import AccommodationData from "../AccommodationData";
import OwnerData from "../OwnerData";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import randomChoice from "src/utils/random-choice";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";

/**
 * Summary of the accommodation
 * and owner form steps.
 */
function FormSummary() {
  const { state, dispatch } = useAccommodationFormContext();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // get random submission result
    const result = randomChoice(Object.values(SubmissionResult));

    // update context value
    dispatch({ type: ActionType.FormSummaryAccepted, payload: { result } });
  };

  return (
    <Form title="Summary" onSubmit={onSubmit}>
      {state.accommodation && (
        <AccommodationData accommodation={state.accommodation} />
      )}

      {state.owner && <OwnerData owner={state.owner} />}
    </Form>
  );
}

export default FormSummary;
