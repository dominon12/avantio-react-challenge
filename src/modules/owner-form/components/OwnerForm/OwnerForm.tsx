import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";

import Form from "src/ui-kit/Form";
import ownerSchema from "../../schema/owner";
import type Owner from "../../types/owner";
import NameInput from "../NameInput";
import EmailInput from "../EmailInput";
import PhoneInput from "../PhoneInput";

/**
 * Owner form.
 */
function OwnerForm() {
  const form = useForm<Owner>({
    mode: "onBlur",
    resolver: yupResolver(ownerSchema),
  });

  const onSubmit: SubmitHandler<Owner> = (data) => {
    console.log("submitted data", data);
  };

  return (
    <FormProvider {...form}>
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
    </FormProvider>
  );
}

export default OwnerForm;
