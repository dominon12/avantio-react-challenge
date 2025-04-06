import useAccommodationFormContext from "src/modules/accommodation-form/hooks/useAccommodationFormContext";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation address input.
 */
function AddressInput() {
  const {
    register,
    formState: { errors },
  } = useAccommodationFormContext();

  return (
    <FormField label="Address" error={errors.address?.message} isRequired>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Address" {...register("address")} />
      )}
    </FormField>
  );
}

export default AddressInput;
