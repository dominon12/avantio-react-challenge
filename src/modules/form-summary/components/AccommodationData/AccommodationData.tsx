import type Accommodation from "src/modules/accommodation-form/types/accommodation";
import DescriptionList from "src/ui-kit/DescriptionList/DescriptionList";
import Image from "src/ui-kit/Image";

type AccommodationDataProps = {
  accommodation: Accommodation;
};

/**
 * Renders passed accommodation data.
 */
function AccommodationData(props: AccommodationDataProps) {
  const { accommodation } = props;

  const data = {
    Name: accommodation.name,
    Address: accommodation.address,
    Description: accommodation.description || "-",
    Type: <span className="capitalize">{accommodation.type}</span>,
    Photos:
      accommodation.photos && accommodation.photos.length > 0 ? (
        <div className="flex gap-4">
          {accommodation.photos?.map((image, index) => {
            const imageUrl = URL.createObjectURL(image.file);
            return (
              <Image
                key={imageUrl}
                src={imageUrl}
                alt={`Uploaded image ${index + 1}`}
              />
            );
          })}
        </div>
      ) : (
        "-"
      ),
  };

  return <DescriptionList title={"Accommodation"} data={data} />;
}

export default AccommodationData;
