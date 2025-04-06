import FormField from "src/ui-kit/FormField";
import TextArea from "src/ui-kit/TextArea";

/**
 * Accommodation description textarea.
 */
function AccommodationDescriptionTextArea() {
  return (
    <FormField label="Description">
      {(fieldId) => <TextArea id={fieldId} placeholder="Description" />}
    </FormField>
  );
}

export default AccommodationDescriptionTextArea;
