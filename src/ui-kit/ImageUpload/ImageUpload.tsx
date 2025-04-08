import type { ChangeEventHandler } from "react";

type ImageUploadProps = {
  id: string;
  onUpload: (image: File) => void;
};

/**
 * Handles image upload process.
 */
function ImageUpload(props: ImageUploadProps) {
  const { id, onUpload } = props;

  /**
   * Executes when user changes file selection.
   */
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // check if a file was selected
    const file = e.target.files?.[0];
    if (!file) return;

    // call back with upload result
    onUpload(file);
  };

  return (
    <div
      className={`relative flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-500 hover:bg-gray-50`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-gray-500">
        Add Photo
      </span>

      <input
        id={id}
        type="file"
        accept="image/*"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageUpload;
