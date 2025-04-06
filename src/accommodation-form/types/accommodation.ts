import AccommodationType from "./accommodation-type";

type Accommodation = {
  name: string;
  address: string;
  description?: string;
  type: AccommodationType;
  photos?: { file: File }[];
};

export default Accommodation;
