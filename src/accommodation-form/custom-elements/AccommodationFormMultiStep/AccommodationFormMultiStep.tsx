import { createRoot } from "react-dom/client";

import ReactAccommodationFormMultiStep from "src/accommodation-form/components/AccommodationFormMultiStep";

/**
 * Custom element based on
 * `AccommodationFormMultiStep`react component.
 */
class AccommodationFormMultiStep extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const shadow = this.shadowRoot as ShadowRoot;

    // Mount React component
    createRoot(shadow).render(<ReactAccommodationFormMultiStep />);
  }
}

export default AccommodationFormMultiStep;
