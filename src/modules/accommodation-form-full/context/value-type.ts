import type { ActionDispatch } from "react";

import type StoreState from "../store/state-type";
import type Action from "../store/action";

type ContextValue = {
  state: StoreState;
  dispatch: ActionDispatch<[action: Action]>;
};

export default ContextValue;
