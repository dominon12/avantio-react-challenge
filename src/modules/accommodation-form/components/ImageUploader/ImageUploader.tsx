import { useFieldArray } from "react-hook-form";

import useAccommodationFormContext from "src/modules/accommodation-form/hooks/useAccommodationFormContext";
import FormField from "src/ui-kit/FormField";
import UIKitImageUploader from "src/ui-kit/ImageUploader";

/**
 * Accommodation image uploader.
 */
function ImageUploader() {
  const {
    control,
    formState: { errors },
    trigger,
  } = useAccommodationFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "photos" });

  const onImageUpload = (file: File) => {
    // append new file
    append({ file });

    // trigger validation
    const newFieldIndex = fields.length;
    trigger(`photos.${newFieldIndex}`);
  };

  // render error messages in the format: "{index + 1}: {message}"
  const errorMessage = (errors.photos ?? [])
    .map?.((error, index) => `${index + 1}: ${error?.file?.message}`)
    .join(", ");

  return (
    <FormField label="Photos" error={errorMessage}>
      {(fieldId) => (
        <UIKitImageUploader
          inputId={fieldId}
          images={fields}
          onUpload={onImageUpload}
          onRemove={remove}
          maxImages={2}
        />
      )}
    </FormField>
  );
}

export default ImageUploader;
