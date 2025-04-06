import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation address input.
 */
function AccommodationAddressInput() {
  return (
    <FormField label="Address">
      {(fieldId) => <Input id={fieldId} placeholder="Address" />}
    </FormField>
  );
}

export default AccommodationAddressInput;
