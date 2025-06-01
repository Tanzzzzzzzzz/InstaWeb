// pages/WebsitePreview.jsx
import React, { useEffect, useState } from "react";

const WebsitePreview = () => {
  const [elements, setElements] = useState([]);
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("previewElements");
    const site = localStorage.getItem("siteData");
    if (data) setElements(JSON.parse(data));
    if (site) setSiteData(JSON.parse(site));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">{siteData.name}</h1>
        <p className="text-center text-gray-700 mb-6">By {siteData.owner}</p>
        <p className="text-center text-gray-600 italic mb-8">{siteData.description}</p>

        <div className="space-y-6">
          {elements.map((el) => {
            switch (el.type) {
              case "heading":
                return <h2 key={el.id} className="text-2xl font-semibold text-purple-700">{el.content}</h2>;
              case "text":
                return <p key={el.id} className="text-gray-800">{el.content}</p>;
              case "button":
                return (
                  <button key={el.id} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {el.content}
                  </button>
                );
              case "image":
                return <img key={el.id} src={el.content} alt="custom" className="w-full max-w-xs rounded shadow-md" />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
