import { createRoot } from "react-dom/client";

import tailwindCSS from "src/styles/output.css?inline";
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

    // Inject TailwindCSS
    const style = document.createElement("style");
    style.textContent = tailwindCSS;
    shadow.append(style);

    // Mount React component
    createRoot(shadow).render(<ReactAccommodationFormMultiStep />);
  }
}

export default AccommodationFormMultiStep;
