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
    <div className="relative h-[100px] w-[100px] flex items-center justify-center border-1 border-solid border-gray-300 rounded-md">
      {children}

      <button
        className="absolute top-0.5 right-0.5 flex items-center justify-center bg-white w-4 h-5 rounded-xs text-red-600 cursor-pointer"
        onClick={onRemove}
      >
        x
      </button>
    </div>
  );
}

export default Removable;
