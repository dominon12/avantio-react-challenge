import { useFormContext } from "react-hook-form";

import type Accommodation from "src/modules/accommodation-form/types/accommodation";

/**
 * Returns accommodation form context value.
 */
function useAccommodationFormContext() {
  return useFormContext<Accommodation>();
}

export default useAccommodationFormContext;
