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
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default AccommodationFormMultiStep;
