import { useFormContext } from "react-hook-form";

import type Owner from "../types/owner";

/**
 * Returns owner form context value.
 */
function useOwnerFormContext() {
  return useFormContext<Owner>();
}

export default useOwnerFormContext;
