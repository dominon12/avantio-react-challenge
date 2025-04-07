import { array, lazy, mixed, object, string } from "yup";
import type { ObjectSchema } from "yup";

import type Accommodation from "../types/accommodation";
import AccommodationType from "../types/accommodation-type";
import validateImageDimensions from "src/utils/validate-image-dimensions";

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
  photos: array()
    .of(
      object().shape({
        file: mixed<File>()
          .test("dimensions", "Image must be 500x500px or smaller", (file) => {
            if (!file) return true;

            return validateImageDimensions({
              image: file,
              maxWidth: 500,
              maxHeight: 500,
            });
          })
          .required(),
      }),
    )
    .max(2)
    .optional(),
});

export default accommodationSchema;
