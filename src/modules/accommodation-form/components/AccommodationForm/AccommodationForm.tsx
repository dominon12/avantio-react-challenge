import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";

import FormStep from "src/ui-kit/FormStep";
import NameInput from "../NameInput";
import AddressInput from "../AddressInput";
import DescriptionTextArea from "../DescriptionTextArea";
import AccommodationTypeSelect from "../AccommodationTypeSelect";
import ImageUploader from "../ImageUploader";
import accommodationSchema from "src/modules/accommodation-form/schema/accommodation";
import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import WithAnimatedAppearance from "src/ui-kit/WithAnimatedAppearance";

/**
 * Form that collects information
 * about an accommodation.
 */
function AccommodationForm() {
  const {
    state: { accommodation },
    dispatch,
  } = useAccommodationFormContext();

  const form = useForm<Accommodation>({
    mode: "onBlur",
    defaultValues: accommodation,
    resolver: yupResolver(accommodationSchema),
  });

  const onSubmit: SubmitHandler<Accommodation> = (payload) => {
    dispatch({ type: ActionType.AccommodationFormSubmitted, payload });
  };

  return (
    <FormProvider {...form}>
      <WithAnimatedAppearance>
        <FormStep
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
        </FormStep>
      </WithAnimatedAppearance>
    </FormProvider>
  );
}

export default AccommodationForm;
