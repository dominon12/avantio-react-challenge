import useAccommodationFormContext from "src/modules/accommodation-form/hooks/useAccommodationFormContext";
import FormField from "src/ui-kit/FormField";
import TextArea from "src/ui-kit/TextArea";

/**
 * Accommodation description textarea.
 */
function DescriptionTextArea() {
  const {
    register,
    formState: { errors },
  } = useAccommodationFormContext();

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
