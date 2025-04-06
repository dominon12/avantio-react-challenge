import { useState } from "react";

import FormField from "src/ui-kit/FormField";
import ImageUploader from "src/ui-kit/ImageUploader";

/**
 * Accommodation image uploader.
 */
function AccommodationImageUploader() {
  const [images, setImages] = useState<{ id: string; value: File }[]>([]);

  const onImageUpload = (image: File) => {
    const newId = `id-${Math.random().toString(36)}-${Date.now()}`;
    setImages((prev) => prev.concat({ id: newId, value: image }));
  };

  const onImageRemove = (id: string) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <FormField label="Photos">
      {(fieldId) => (
        <ImageUploader
          inputId={fieldId}
          images={images}
          onUpload={onImageUpload}
          onRemove={onImageRemove}
          maxImages={2}
        />
      )}
    </FormField>
  );
}

export default AccommodationImageUploader;
