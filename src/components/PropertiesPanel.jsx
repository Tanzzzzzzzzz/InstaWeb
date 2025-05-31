import React from "react";

const PropertiesPanel = ({ selectedElement, onChange }) => {
  if (!selectedElement) return null;

  return (
    <div className="w-1/4 bg-white p-4 shadow-md border-l">
      <h2 className="text-lg font-bold mb-4">Edit Element</h2>

      {selectedElement.type === "text" && (
        <input
          type="text"
          value={selectedElement.content}
          onChange={(e) => onChange({ ...selectedElement, content: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      )}

      {selectedElement.type === "image" && (
        <input
          type="text"
          value={selectedElement.src}
          onChange={(e) => onChange({ ...selectedElement, src: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      )}

      {selectedElement.type === "button" && (
        <input
          type="text"
          value={selectedElement.label}
          onChange={(e) => onChange({ ...selectedElement, label: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      )}
    </div>
  );
};

export default PropertiesPanel;
