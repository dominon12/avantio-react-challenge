import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

/**
 * Accommodation name input.
 */
function AccommodationNameInput() {
  return (
    <FormField label="Name">
      {(fieldId) => <Input id={fieldId} placeholder="Name" />}
    </FormField>
  );
}

export default AccommodationNameInput;
