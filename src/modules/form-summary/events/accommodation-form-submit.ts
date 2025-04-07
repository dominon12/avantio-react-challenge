import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import type Owner from "src/modules/owner-form/types/owner";

type EventParams = {
  detail: { accommodation: Accommodation; owner: Owner };
};

/**
 * Creates a custom event of `accommodation-form-submit` type.
 */
function createAccommodationFormSubmitEvent(params: EventParams) {
  const { detail } = params;

  const event = new CustomEvent("accommodation-form-submit", {
    detail,
    bubbles: true,
    // propagate across
    // the shadow DOM boundary
    composed: true,
  });

  return event;
}

export default createAccommodationFormSubmitEvent;
