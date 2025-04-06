import { useFormContext } from "react-hook-form";

import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation name input.
 */
function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Accommodation>();

  return (
    <FormField label="Name" error={errors.name?.message} isRequired>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Name" {...register("name")} />
      )}
    </FormField>
  );
}

export default NameInput;
