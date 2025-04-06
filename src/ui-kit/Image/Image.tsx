import type { ComponentPropsWithoutRef } from "react";

type BaseImageProps = ComponentPropsWithoutRef<"img">;

type ImageProps = Omit<BaseImageProps, "className"> &
  Required<Pick<BaseImageProps, "src" | "alt">>;

/**
 * Image preview.
 */
function Image(props: ImageProps) {
  return <img className="object-contain" width={100} height={100} {...props} />;
}

export default Image;
