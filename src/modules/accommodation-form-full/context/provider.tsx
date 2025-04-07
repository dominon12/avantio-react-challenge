import { ReactNode } from "react";

import AccommodationFormContext from "./context";
import useContextBusiness from "./business";

type ContextProviderProps = {
  children: ReactNode;
};

/**
 * Provides accommodation form context
 * value to children.
 */
function AccommodationFormContextProvider(props: ContextProviderProps) {
  const { children } = props;

  const value = useContextBusiness();

  return (
    <AccommodationFormContext.Provider value={value}>
      {children}
    </AccommodationFormContext.Provider>
  );
}

export default AccommodationFormContextProvider;
