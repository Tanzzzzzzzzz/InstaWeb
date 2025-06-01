import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Builder = () => {
  const [elements, setElements] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  const addElement = (type) => {
    const newElement = { id: Date.now(), type, content: type === "image" ? "https://via.placeholder.com/300" : `${type} content` };
    setElements([...elements, newElement]);
  };

  const updateContent = (id, content) => {
    setElements(elements.map(el => el.id === id ? { ...el, content } : el));
  };

  const handlePreview = () => {
    localStorage.setItem("previewElements", JSON.stringify(elements));
    navigate("/site");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-white p-6 border-r space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Elements</h2>
        {['text', 'heading', 'button', 'image'].map(type => (
          <button
            key={type}
            onClick={() => addElement(type)}
            className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
          >
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <button
          onClick={handlePreview}
          className="w-full px-4 py-2 mt-6 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Preview Website
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">Design Canvas</h2>
          {elements.map((el) => (
            <div
              key={el.id}
              onClick={() => setActiveId(el.id)}
              className={`p-3 border rounded ${activeId === el.id ? "border-purple-500" : "border-gray-300"}`}
            >
              {el.type === "image" ? (
                <img src={el.content} alt="Element" className="w-full max-w-sm rounded" />
              ) : (
                <div>{el.content}</div>
              )}
              {activeId === el.id && (
                <input
                  type="text"
                  value={el.content}
                  onChange={(e) => updateContent(el.id, e.target.value)}
                  className="mt-2 p-2 w-full border rounded"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Builder;