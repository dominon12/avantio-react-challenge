import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import AccommodationType from "src/modules/accommodation-form/types/accommodation-type";

const mockAccommodation: Accommodation = {
  name: "Test Accommodation",
  address: "123 Test St",
  type: AccommodationType.House,
};

export default mockAccommodation;
