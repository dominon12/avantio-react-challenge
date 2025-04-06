import { useFormContext } from "react-hook-form";

import type Accommodation from "src/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation address input.
 */
function AccommodationAddressInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Accommodation>();

  return (
    <FormField label="Address" error={errors.address?.message}>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Address" {...register("address")} />
      )}
    </FormField>
  );
}

export default AccommodationAddressInput;
