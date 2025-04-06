import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";

import Form from "src/ui-kit/Form";
import AccommodationNameInput from "../AccommodationNameInput";
import AccommodationAddressInput from "../AccommodationAddressInput";
import AccommodationDescriptionTextArea from "../AccommodationDescriptionTextArea";
import AccommodationTypeSelect from "../AccommodationTypeSelect";
import AccommodationImageUploader from "../AccommodationImageUploader";
import accommodationSchema from "src/accommodation-form/schema/accommodation";
import type Accommodation from "src/accommodation-form/types/accommodation";

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
        <AccommodationNameInput />
        <AccommodationAddressInput />
        <AccommodationDescriptionTextArea />
        <AccommodationTypeSelect />
        <AccommodationImageUploader />
      </Form>
    </FormProvider>
  );
}

export default AccommodationForm;
