import Accommodation from "src/modules/accommodation-form/types/accommodation";
import FormStep from "../types/form-step";
import Owner from "src/modules/owner-form/types/owner";

type StoreState = {
  step: FormStep;
  accommodation?: Accommodation;
  owner?: Owner;
  result?: "success" | "error";
};

export default StoreState;
