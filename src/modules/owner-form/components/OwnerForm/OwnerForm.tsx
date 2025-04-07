import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";

import Form from "src/ui-kit/Form";
import ownerSchema from "../../schema/owner";
import type Owner from "../../types/owner";
import NameInput from "../NameInput";
import EmailInput from "../EmailInput";
import PhoneInput from "../PhoneInput";
import useAccommodationFormContext from "src/modules/accommodation-form-full/context/selector";
import ActionType from "src/modules/accommodation-form-full/store/action-type";
import WithAnimatedAppearance from "src/ui-kit/WithAnimatedAppearance";

/**
 * Owner form.
 */
function OwnerForm() {
  const { dispatch } = useAccommodationFormContext();

  const form = useForm<Owner>({
    mode: "onBlur",
    resolver: yupResolver(ownerSchema),
  });

  const onSubmit: SubmitHandler<Owner> = (payload) => {
    dispatch({ type: ActionType.OwnerFormSubmitted, payload });
  };

  return (
    <FormProvider {...form}>
      <WithAnimatedAppearance>
        <Form
          title="Owner"
          submitText="Next"
          canSubmit={form.formState.isValid}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <NameInput />
          <EmailInput />
          <PhoneInput />
        </Form>
      </WithAnimatedAppearance>
    </FormProvider>
  );
}

export default OwnerForm;
