import type { ChangeEventHandler } from "react";

import { imageSize } from "../shared/image-size";

type ImageUploadProps = {
  onUpload: (image: File) => void;
  validate?: (image: File) => boolean;
};

/**
 * Handles image upload process.
 */
function ImageUpload(props: ImageUploadProps) {
  const { onUpload, validate } = props;

  /**
   * Executes when user changes file selection.
   */
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // check if a file was selected
    const file = e.target.files?.[0];
    if (!file) return;

    // validate, if required
    if (validate && !validate(file)) return;

    // call back with upload result
    onUpload(file);
  };

  return (
    <div
      className={`relative w-[100px] h-[100px] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-gray-500">
        Add Photo
      </span>

      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageUpload;
