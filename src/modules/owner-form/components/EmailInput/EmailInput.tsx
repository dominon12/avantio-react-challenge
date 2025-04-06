import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";
import useOwnerFormContext from "src/modules/owner-form/hooks/useOwnerFormContext";

/**
 * Owner name input.
 */
function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useOwnerFormContext();

  return (
    <FormField label="Email" error={errors.email?.message}>
      {(fieldId) => (
        <Input id={fieldId} placeholder="Email" {...register("email")} />
      )}
    </FormField>
  );
}

export default EmailInput;
