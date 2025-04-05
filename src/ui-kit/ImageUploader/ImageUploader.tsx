import Image from "../Image";
import ImageUpload from "../ImageUpload";
import Removable from "../Removable";

type ImageUploaderProps = {
  images: { id: string; value: File }[];
  onUpload: (image: File) => void;
  onRemove: (id: string) => void;
  maxImages?: number;
};

/**
 * Allows to upload images
 * and to preview them.
 */
function ImageUploader(props: ImageUploaderProps) {
  const { images, onUpload, onRemove, maxImages } = props;

  // don't allow to upload more images in case
  // their current amount exceeds `maxImages`
  const canUpload =
    typeof maxImages !== "undefined" && images.length < maxImages;

  return (
    <div className="flex gap-4">
      {images.map((image) => {
        const imageUrl = URL.createObjectURL(image.value);
        return (
          <Removable key={image.id} onRemove={() => onRemove(image.id)}>
            <Image src={imageUrl} />
          </Removable>
        );
      })}

      {canUpload && <ImageUpload onUpload={onUpload} />}
    </div>
  );
}

export default ImageUploader;
