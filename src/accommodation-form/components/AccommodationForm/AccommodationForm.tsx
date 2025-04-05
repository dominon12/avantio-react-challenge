import Form from "src/ui-kit/Form";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";
import TextArea from "src/ui-kit/TextArea";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const onSubmit = () => {};

  return (
    <Form title="Accommodation" onSubmit={onSubmit}>
      <FormField label="Name">
        {(fieldId) => <Input id={fieldId} placeholder="Name" />}
      </FormField>
      <FormField label="Description">
        {(fieldId) => <TextArea id={fieldId} placeholder="Description" />}
      </FormField>
    </Form>
  );
}

export default AccommodationForm;
