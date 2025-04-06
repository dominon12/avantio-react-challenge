import { array, lazy, mixed, object, string } from "yup";
import type { ObjectSchema } from "yup";

import type Accommodation from "../types/accommodation";
import AccommodationType from "../types/accommodation-type";

const accommodationSchema: ObjectSchema<Accommodation> = object().shape({
  // todo: disallow numbers
  name: string().min(4).max(128).required(),
  address: string().min(4).max(128).required(),
  description: lazy((value) => {
    if (value) {
      return string().min(128).max(2048);
    }
    return string().optional();
  }),
  type: string().oneOf(Object.values(AccommodationType)).required(),
  // todo: dimension restrictions of 500x500
  photos: array()
    .of(
      object().shape({
        id: string().required(),
        file: mixed<File>().required(),
      })
    )
    .max(2)
    .optional(),
});

export default accommodationSchema;
