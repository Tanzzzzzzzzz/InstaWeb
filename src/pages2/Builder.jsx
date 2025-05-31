import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableElement from "../components/DraggableElement";
import DroppableCanvas from "../components/DroppableCanvas";
import PropertiesPanel from "../components/PropertiesPanel";

const Builder = () => {
  const [elements, setElements] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over?.id === "canvas") {
      const newElement = createElementFromId(active.id);
      setElements((prev) => [...prev, newElement]);
    }
  };

  const createElementFromId = (id) => {
    switch (id) {
      case "text":
        return { id: Date.now(), type: "text", content: "Sample text" };
      case "image":
        return {
          id: Date.now(),
          type: "image",
          src: "https://via.placeholder.com/150",
        };
      case "button":
        return { id: Date.now(), type: "button", label: "Click Me" };
      default:
        return null;
    }
  };

  const handleUpdateElement = (updatedElement) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
    );
    setSelected(updatedElement);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md border-r">
        <h2 className="text-xl font-bold mb-4">Elements</h2>
        <DndContext onDragEnd={handleDragEnd}>
          <DraggableElement id="text">📝 Text</DraggableElement>
          <DraggableElement id="image">🖼️ Image</DraggableElement>
          <DraggableElement id="button">🔘 Button</DraggableElement>
        </DndContext>
      </div>

      {/* Center Canvas */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-2">Your Website</h2>
        <DndContext onDragEnd={handleDragEnd}>
          <DroppableCanvas>
            {elements.map((el) => (
              <div
                key={el.id}
                className="p-2 border mb-2 cursor-pointer"
                onClick={() => setSelected(el)}
              >
                {el.type === "text" && <p>{el.content}</p>}
                {el.type === "image" && (
                  <img src={el.src} alt="user" className="w-32" />
                )}
                {el.type === "button" && (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    {el.label}
                  </button>
                )}
              </div>
            ))}
          </DroppableCanvas>
        </DndContext>
      </div>

      {/* Right Properties Panel */}
      <PropertiesPanel
        selectedElement={selected}
        onChange={handleUpdateElement}
      />
    </div>
  );
};

export default Builder;
