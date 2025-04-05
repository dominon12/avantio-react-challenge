import { useState } from "react";

import Form from "src/ui-kit/Form";
import FormField from "src/ui-kit/FormField";
import ImageUploader from "src/ui-kit/ImageUploader";
import Input from "src/ui-kit/Input";
import Select from "src/ui-kit/Select";
import TextArea from "src/ui-kit/TextArea";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const [images, setImages] = useState<{ id: string; value: File }[]>([]);

  const onSubmit = () => {};

  const onImageUpload = (image: File) => {
    const newId = `id-${Math.random().toString(36)}-${Date.now()}`;
    setImages((prev) => prev.concat({ id: newId, value: image }));
  };

  const onImageRemove = (id: string) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <Form title="Accommodation" onSubmit={onSubmit}>
      <FormField label="Name">
        {(fieldId) => <Input id={fieldId} placeholder="Name" />}
      </FormField>
      <FormField label="Description">
        {(fieldId) => <TextArea id={fieldId} placeholder="Description" />}
      </FormField>
      <FormField label="Type">
        {(fieldId) => (
          <Select id={fieldId}>
            <option value="">Select...</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </Select>
        )}
      </FormField>
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
    </Form>
  );
}

export default AccommodationForm;
