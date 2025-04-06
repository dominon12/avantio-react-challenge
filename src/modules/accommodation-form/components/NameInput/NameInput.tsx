import useAccommodationFormContext from "src/modules/accommodation-form/hooks/useAccommodationFormContext";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation name input.
 */
function NameInput() {
  const {
    register,
    formState: { errors },
  } = useAccommodationFormContext();

  return (
    <FormField label="Name" error={errors.name?.message} isRequired>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Name" {...register("name")} />
      )}
    </FormField>
  );
}

export default NameInput;
