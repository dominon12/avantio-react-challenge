import { array, lazy, mixed, object, string } from "yup";
import type { ObjectSchema } from "yup";

import type Accommodation from "../types/accommodation";
import AccommodationType from "../types/accommodation-type";

const accommodationSchema: ObjectSchema<Accommodation> = object().shape({
  name: string()
    .min(4)
    .max(128)
    .matches(/^[^0-9]*$/, "Name must not contain numbers")
    .required()
    .label("Name"),
  address: string().min(4).max(128).required().label("Address"),
  description: lazy((value) => {
    if (value) {
      return string().min(128).max(2048).label("Description");
    }
    return string().optional();
  }),
  type: string()
    .oneOf(Object.values(AccommodationType))
    .required()
    .label("Type"),
  // todo: dimension restrictions of 500x500
  photos: array()
    .of(
      object().shape({
        file: mixed<File>().required(),
      })
    )
    .max(2)
    .optional(),
});

export default accommodationSchema;
