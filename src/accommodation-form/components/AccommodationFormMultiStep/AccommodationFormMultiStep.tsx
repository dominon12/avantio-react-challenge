import { useRef, useState } from "react";
import type { FormEventHandler } from "react";

/**
 * Multi-Step Accommodation Creation Form.
 */
function AccommodationFormMultiStep() {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const submitEvent = new CustomEvent("accommodation-creation-form-submit", {
      detail: { value },
      bubbles: true,
      // propagate across the shadow DOM boundary
      composed: true,
    });

    formRef.current?.dispatchEvent(submitEvent);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AccommodationFormMultiStep;
