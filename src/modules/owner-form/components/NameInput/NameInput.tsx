import useOwnerFormContext from "src/modules/owner-form/hooks/useOwnerFormContext";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Owner name input.
 */
function NameInput() {
  const {
    register,
    formState: { errors },
  } = useOwnerFormContext();

  return (
    <FormField label="Name" error={errors.name?.message}>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Name" {...register("name")} />
      )}
    </FormField>
  );
}

export default NameInput;
