import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableCanvas = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      className="w-full h-[600px] bg-white border rounded-lg p-4 shadow-inner overflow-auto"
    >
      {children}
    </div>
  );
};

export default DroppableCanvas;
