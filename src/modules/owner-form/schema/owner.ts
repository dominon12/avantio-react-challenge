import { lazy, number, object, string } from "yup";
import type { ObjectSchema } from "yup";

import type Owner from "../types/owner";

const ownerSchema: ObjectSchema<Owner> = object().shape({
  name: string().min(4).max(64).required().label("Name"),
  email: string().email().required().label("Email"),
  phone: lazy((value) => {
    if (value) {
      return number()
        .max(999999999, "Phone can contain up to 9 digits")
        .required()
        .label("Phone");
    }
    return number()
      .transform(() => undefined)
      .optional();
  }),
});

export default ownerSchema;
