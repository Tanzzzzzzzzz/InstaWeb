import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableElement = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    border: "1px dashed #ccc",
    padding: "8px",
    marginBottom: "10px",
    cursor: "grab",
    background: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default DraggableElement;
