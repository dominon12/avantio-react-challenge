import { useFormContext } from "react-hook-form";

import type Accommodation from "src/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation name input.
 */
function AccommodationNameInput() {
  const { register } = useFormContext<Accommodation>();

  return (
    <FormField label="Name">
      {(fieldId) => (
        <Input id={fieldId} placeholder="Name" {...register("name")} />
      )}
    </FormField>
  );
}

export default AccommodationNameInput;
