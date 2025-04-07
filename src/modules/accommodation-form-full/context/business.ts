import { useMemo, useReducer } from "react";

import type ContextValue from "./value-type";
import reducer from "../store/reducer";
import initialState from "../store/initial-state";

/**
 * Encapsulate accommodation form context
 * business logic.
 */
function useContextBusiness(): ContextValue {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: ContextValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return value;
}

export default useContextBusiness;
