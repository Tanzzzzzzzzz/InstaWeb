// pages/Builder.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Builder = () => {
  const navigate = useNavigate();
  const [elements, setElements] = useState([]);
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("siteData");
    if (data) setSiteData(JSON.parse(data));
  }, []);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      content: type === "image" ? "https://via.placeholder.com/150" : `${type} content`,
    };
    setElements([...elements, newElement]);
  };

  const handleContentChange = (id, value) => {
    setElements(elements.map(el => el.id === id ? { ...el, content: value } : el));
  };

  const goToPreview = () => {
    localStorage.setItem("previewElements", JSON.stringify(elements));
    navigate("/site");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/4 bg-gray-100 p-6 border-r space-y-4">
        <h2 className="text-xl font-bold">Add Elements</h2>
        <button onClick={() => addElement("text")} className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Add Text</button>
        <button onClick={() => addElement("heading")} className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">Add Heading</button>
        <button onClick={() => addElement("button")} className="block w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded">Add Button</button>
        <button onClick={() => addElement("image")} className="block w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded">Add Image</button>
        <button onClick={goToPreview} className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded">Preview Site</button>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Builder Canvas</h1>
        <div className="space-y-4">
          {elements.map((el) => (
            <div key={el.id} className="border p-3 rounded-md bg-white shadow">
              {el.type === "image" ? (
                <input
                  type="text"
                  value={el.content}
                  onChange={(e) => handleContentChange(el.id, e.target.value)}
                  placeholder="Image URL"
                  className="w-full p-2 border rounded"
                />
              ) : (
                <input
                  type="text"
                  value={el.content}
                  onChange={(e) => handleContentChange(el.id, e.target.value)}
                  className="w-full p-2 border rounded"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Builder;
