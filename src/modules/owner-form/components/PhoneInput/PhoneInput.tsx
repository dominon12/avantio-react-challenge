import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";
import useOwnerFormContext from "src/modules/owner-form/hooks/useOwnerFormContext";

/**
 * Owner name input.
 */
function PhoneInput() {
  const {
    register,
    formState: { errors },
  } = useOwnerFormContext();

  return (
    <FormField label="Phone" error={errors.phone?.message}>
      {(fieldId) => (
        <Input
          id={fieldId}
          placeholder="Phone"
          type="number"
          {...register("phone")}
        />
      )}
    </FormField>
  );
}

export default PhoneInput;
