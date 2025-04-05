import Form from "src/ui-kit/Form";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const onSubmit = () => {};

  return (
    <Form title="Accommodation" onSubmit={onSubmit}>
      Accommodation form body
    </Form>
  );
}

export default AccommodationForm;
