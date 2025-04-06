import Form from "src/ui-kit/Form";
import AccommodationNameInput from "../AccommodationNameInput";
import AccommodationAddressInput from "../AccommodationAddressInput";
import AccommodationDescriptionTextArea from "../AccommodationDescriptionTextArea";
import AccommodationTypeSelect from "../AccommodationTypeSelect";
import AccommodationImageUploader from "../AccommodationImageUploader";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const onSubmit = () => {};

  return (
    <Form title="Accommodation" submitText="Next" onSubmit={onSubmit}>
      <AccommodationNameInput />
      <AccommodationAddressInput />
      <AccommodationDescriptionTextArea />
      <AccommodationTypeSelect />
      <AccommodationImageUploader />
    </Form>
  );
}

export default AccommodationForm;
