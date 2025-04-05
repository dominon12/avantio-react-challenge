import Form from "src/ui-kit/Form";
import FormField from "src/ui-kit/FormField";
import Input from "src/ui-kit/Input";

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
    </Form>
  );
}

export default AccommodationForm;
