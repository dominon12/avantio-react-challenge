import type { ReactNode } from "react";

type RemovableProps = {
  children: ReactNode;
  onRemove: () => void;
};

/**
 * Renders a cross icon
 * to remove contained object.
 */
function Removable(props: RemovableProps) {
  const { children, onRemove } = props;

  return (
    <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-md border-1 border-solid border-gray-300">
      {children}

      <button
        className="absolute top-0.5 right-0.5 flex h-5 w-4 cursor-pointer items-center justify-center rounded-xs bg-white text-red-600"
        onClick={onRemove}
      >
        x
      </button>
    </div>
  );
}

export default Removable;
