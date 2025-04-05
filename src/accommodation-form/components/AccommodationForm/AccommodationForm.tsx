import Form from "src/ui-kit/Form";
import FormField from "src/ui-kit/FormField";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const onSubmit = () => {};

  return (
    <Form title="Accommodation" onSubmit={onSubmit}>
      <FormField label="Name">
        {(fieldId) => <input id={fieldId} placeholder="Name" />}
      </FormField>
    </Form>
  );
}

export default AccommodationForm;
