import useAccommodationFormContext from "src/modules/accommodation-form/hooks/useAccommodationFormContext";
import AccommodationType from "src/modules/accommodation-form/types/accommodation-type";
import FormField from "src/ui-kit/FormField";
import Select from "src/ui-kit/Select";

/**
 * Accommodation type select.
 */
function AccommodationTypeSelect() {
  const { register } = useAccommodationFormContext();

  return (
    <FormField label="Type" isRequired>
      {(fieldId) => (
        <Select id={fieldId} {...register("type")}>
          {Object.values(AccommodationType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      )}
    </FormField>
  );
}

export default AccommodationTypeSelect;
