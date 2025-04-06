import { useFieldArray, useFormContext } from "react-hook-form";

import FormField from "src/ui-kit/FormField";
import UIKitImageUploader from "src/ui-kit/ImageUploader";
import type Accommodation from "src/modules/accommodation-form/types/accommodation";

/**
 * Accommodation image uploader.
 */
function ImageUploader() {
  const { control } = useFormContext<Accommodation>();
  const { fields, append, remove } = useFieldArray({ control, name: "photos" });

  const onImageUpload = (file: File) => append({ file });

  return (
    <FormField label="Photos">
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
