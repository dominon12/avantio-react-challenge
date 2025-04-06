import { useFormContext } from "react-hook-form";

import type Accommodation from "src/accommodation-form/types/accommodation";
import FormField from "src/ui-kit/FormField";
import TextArea from "src/ui-kit/TextArea";

/**
 * Accommodation description textarea.
 */
function DescriptionTextArea() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Accommodation>();

  return (
    <FormField label="Description" error={errors.description?.message}>
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

export default DescriptionTextArea;
