// src/pages/Builder.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebsiteContext } from '../context/WebsiteContext';

const Builder = () => {
  const { websiteData, setWebsiteData } = useContext(WebsiteContext);
  const [elementType, setElementType] = useState('heading');
  const [content, setContent] = useState('');
  const [fontSize, setFontSize] = useState('24px');
  const [customColor, setCustomColor] = useState('#000000');
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const addElement = () => {
    const newElement = {
      type: elementType,
      content,
      fontSize,
      customColor,
    };

    if (elementType === 'image' && imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newElement.src = e.target.result;
        setWebsiteData((prev) => ({
          ...prev,
          elements: [...prev.elements, newElement],
        }));
      };
      reader.readAsDataURL(imageFile);
    } else {
      setWebsiteData((prev) => ({
        ...prev,
        elements: [...prev.elements, newElement],
      }));
    }

    setContent('');
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-purple-400">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Website Builder</h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Element Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={elementType}
              onChange={(e) => setElementType(e.target.value)}
            >
              <option value="heading">Heading</option>
              <option value="paragraph">Paragraph</option>
              <option value="image">Image</option>
            </select>
          </div>

          {elementType !== 'image' && (
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          )}

          {elementType === 'image' && (
            <div>
              <label className="block text-sm font-medium mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Font Size</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input
              type="color"
              className="w-full border rounded px-3 py-2"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={addElement}
          className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Add Element
        </button>

        <button
          onClick={() => navigate('/site')}
          className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Preview Website
        </button>
      </div>
    </div>
  );
};

export default Builder;
