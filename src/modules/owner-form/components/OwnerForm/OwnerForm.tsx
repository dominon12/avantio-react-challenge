import Form from "src/ui-kit/Form";

/**
 * Owner form.
 */
function OwnerForm() {
  const onSubmit = () => {};

  return (
    <Form title="Owner" submitText="Next" onSubmit={onSubmit}>
      Owner form
    </Form>
  );
}

export default OwnerForm;
