import { useFormContext } from "react-hook-form";

import type Accommodation from "src/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import TextArea from "src/ui-kit/TextArea";

/**
 * Accommodation description textarea.
 */
function AccommodationDescriptionTextArea() {
  const { register } = useFormContext<Accommodation>();

  return (
    <FormField label="Description">
      {(fieldId) => (
        <TextArea
          id={fieldId}
          placeholder="Description"
          {...register("description")}
        />
      )}
    </FormField>
  );
}

export default AccommodationDescriptionTextArea;
