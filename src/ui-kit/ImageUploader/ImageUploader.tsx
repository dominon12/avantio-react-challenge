import Image from "../Image";
import ImageUpload from "../ImageUpload";
import Removable from "../Removable";

type ImageUploaderProps = {
  inputId: string;
  images: { id: string; file: File }[];
  onUpload: (image: File) => void;
  onRemove: (index: number) => void;
  maxImages?: number;
};

/**
 * Allows to upload images
 * and to preview them.
 */
function ImageUploader(props: ImageUploaderProps) {
  const { inputId, images, onUpload, onRemove, maxImages } = props;

  // don't allow to upload more images in case
  // their current amount exceeds `maxImages`
  const canUpload =
    typeof maxImages !== "undefined" && images.length < maxImages;

  return (
    <div className="flex gap-4">
      {images.map((image, index) => {
        const imageUrl = URL.createObjectURL(image.file);
        return (
          <Removable key={image.id} onRemove={() => onRemove(index)}>
            <Image src={imageUrl} />
          </Removable>
        );
      })}

      {canUpload && <ImageUpload id={inputId} onUpload={onUpload} />}
    </div>
  );
}

export default ImageUploader;
