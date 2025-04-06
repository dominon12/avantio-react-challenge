import { useFormContext } from "react-hook-form";

import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation address input.
 */
function AddressInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Accommodation>();

  return (
    <FormField label="Address" error={errors.address?.message} isRequired>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Address" {...register("address")} />
      )}
    </FormField>
  );
}

export default AddressInput;
