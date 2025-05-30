import { useState } from "react";
import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";

const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    border: "1px solid #ccc",
    padding: "8px",
    backgroundColor: "white",
    marginBottom: "8px",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {label}
    </div>
  );
};

const DroppableCanvas = ({ children }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      className="min-h-[400px] border-2 border-dashed border-gray-500 p-4 bg-gray-50"
    >
      {children}
    </div>
  );
};

const RenderElement = ({ type }) => {
  switch (type) {
    case "text":
      return <p className="text-xl">Sample Text</p>;
    case "image":
      return (
        <img
          src="https://via.placeholder.com/150"
          alt="Sample"
          className="w-32"
        />
      );
    case "button":
      return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Click Me
        </button>
      );
    default:
      return null;
  }
};

export default function App() {
  const [elements, setElements] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over?.id === "canvas") {
      setElements((prev) => [...prev, active.id]);
    }
  };

  return (
    <div className="flex p-4 gap-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-4">Elements</h2>
          <DraggableItem id="text" label="Text" />
          <DraggableItem id="image" label="Image" />
          <DraggableItem id="button" label="Button" />
        </div>

        {/* Canvas */}
        <div className="w-3/4">
          <h2 className="font-bold mb-2">Canvas</h2>
          <DroppableCanvas>
            {elements.map((el, index) => (
              <div key={index} className="my-4">
                <RenderElement type={el} />
              </div>
            ))}
          </DroppableCanvas>
        </div>
      </DndContext>
    </div>
  );
}
