import FormField from "src/ui-kit/FormField";
import Select from "src/ui-kit/Select";

/**
 * Accommodation type select.
 */
function AccommodationTypeSelect() {
  return (
    <FormField label="Type">
      {(fieldId) => (
        <Select id={fieldId}>
          <option value="">Select...</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="house">House</option>
        </Select>
      )}
    </FormField>
  );
}

export default AccommodationTypeSelect;
