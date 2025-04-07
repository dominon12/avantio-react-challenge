import AccommodationFormContextProvider from "src/modules/accommodation-form-full/context/provider";
import AccommodationFormMultiStep from "../AccommodationFormMultiStep/AccommodationFormMultiStep";

/**
 * Connects `AccommodationFormMultiStep` with context.
 */
function MultiStepFormWithContext() {
  return (
    <AccommodationFormContextProvider>
      <AccommodationFormMultiStep />
    </AccommodationFormContextProvider>
  );
}

export default MultiStepFormWithContext;
