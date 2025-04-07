import { useContext } from "react";

import AccommodationFormContext from "./context";
import type ContextValue from "./value-type";

/**
 * Returns the accommodation form context value.
 */
function useAccommodationFormContext(): ContextValue {
  const context = useContext(AccommodationFormContext);

  if (!context) {
    throw new Error(
      "`useAccommodationFormContext` must be used within an `AccommodationFormContextProvider`",
    );
  }

  return context;
}

export default useAccommodationFormContext;
