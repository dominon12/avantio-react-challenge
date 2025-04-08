import { useRef } from "react";
import type { FormEventHandler } from "react";

import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import FormStep from "src/ui-kit/FormStep";
import AccommodationData from "../AccommodationData";
import OwnerData from "../OwnerData";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import randomChoice from "src/utils/random-choice";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";
import createAccommodationFormSubmitEvent from "src/modules/form-summary/events/accommodation-form-submit";
import WithAnimatedAppearance from "src/ui-kit/WithAnimatedAppearance";

/**
 * Summary of the accommodation
 * and owner form steps.
 */
function FormSummary() {
  const { state, dispatch } = useAccommodationFormContext();
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles final form submission.
   */
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // dispatch custom DOM event
    if (state.accommodation && state.owner && formRef.current) {
      const formSubmitEvent = createAccommodationFormSubmitEvent({
        detail: {
          accommodation: state.accommodation,
          owner: state.owner,
        },
      });

      formRef.current.dispatchEvent(formSubmitEvent);
    }

    // get random submission result
    const result = randomChoice(Object.values(SubmissionResult));

    // update context value
    dispatch({ type: ActionType.FormSummaryAccepted, payload: { result } });
  };

  return (
    <WithAnimatedAppearance>
      <FormStep ref={formRef} title="Summary" onSubmit={onSubmit}>
        {state.accommodation && (
          <AccommodationData accommodation={state.accommodation} />
        )}

        {state.owner && <OwnerData owner={state.owner} />}
      </FormStep>
    </WithAnimatedAppearance>
  );
}

export default FormSummary;
