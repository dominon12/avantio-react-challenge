import type { FC } from "react";

import FormSummary from "src/modules/form-summary/components/FormSummary";
import FormStep from "../../types/form-step";
import AccommodationForm from "src/modules/accommodation-form/components/AccommodationForm";
import OwnerForm from "src/modules/owner-form/components/OwnerForm";
import useAccommodationFormContext from "../../context/selector";

// steps matched to components to render
const steps: Record<FormStep, FC> = {
  [FormStep.Accommodation]: AccommodationForm,
  [FormStep.Owner]: OwnerForm,
  [FormStep.Summary]: FormSummary,
  [FormStep.Confirmation]: () => <>confirmation</>,
};

/**
 * Multi-Step Accommodation Creation Form.
 */
function AccommodationFormMultiStep() {
  const {
    state: { step },
  } = useAccommodationFormContext();

  const StepComponent = steps[step];

  return <StepComponent />;
}

export default AccommodationFormMultiStep;
