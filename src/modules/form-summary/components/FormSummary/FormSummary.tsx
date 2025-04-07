import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import Form from "src/ui-kit/Form";
import AccommodationData from "../AccommodationData";
import OwnerData from "../OwnerData";

/**
 * Summary of the accommodation
 * and owner form steps.
 */
function FormSummary() {
  const { state } = useAccommodationFormContext();

  const onSubmit = () => {};

  return (
    <Form title="Summary" onSubmit={onSubmit}>
      {state.accommodation && (
        <AccommodationData accommodation={state.accommodation} />
      )}

      {state.owner && <OwnerData owner={state.owner} />}
    </Form>
  );
}

export default FormSummary;
