type ImageDimensionsValidatorParams = {
  image: File;
  maxWidth: number;
  maxHeight: number;
};

/**
 * Validates image dimensions.
 */
async function validateImageDimensions(
  params: ImageDimensionsValidatorParams,
): Promise<boolean> {
  const { image, maxWidth, maxHeight } = params;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const imageUrl = URL.createObjectURL(image);

    img.onload = () => {
      const isValid = img.width <= maxWidth && img.height <= maxHeight;
      URL.revokeObjectURL(imageUrl);
      resolve(isValid);
    };

    img.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(false);
    };

    img.src = imageUrl;
  });
}

export default validateImageDimensions;
