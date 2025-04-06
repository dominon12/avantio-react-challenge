import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";

import Form from "src/ui-kit/Form";
import NameInput from "../NameInput";
import AddressInput from "../AddressInput";
import DescriptionTextArea from "../DescriptionTextArea";
import AccommodationTypeSelect from "../AccommodationTypeSelect";
import ImageUploader from "../ImageUploader";
import accommodationSchema from "src/modules/accommodation-form/schema/accommodation";
import type Accommodation from "src/modules/accommodation-form/types/accommodation";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const form = useForm<Accommodation>({
    mode: "onBlur",
    resolver: yupResolver(accommodationSchema),
  });

  const onSubmit: SubmitHandler<Accommodation> = (data) => {
    console.log("submitted data", data);
  };

  return (
    <FormProvider {...form}>
      <Form
        title="Accommodation"
        submitText="Next"
        canSubmit={form.formState.isValid}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <NameInput />
        <AddressInput />
        <DescriptionTextArea />
        <AccommodationTypeSelect />
        <ImageUploader />
      </Form>
    </FormProvider>
  );
}

export default AccommodationForm;
