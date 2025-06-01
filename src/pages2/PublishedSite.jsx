import React, { useEffect, useState } from "react";

const PublishedSite = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("websiteData");
    if (saved) {
      setElements(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white p-10 space-y-4">
      {elements.map((el) => (
        <div key={el.id}>
          {el.type === "text" && <p className="text-xl">{el.content}</p>}
          {el.type === "image" && (
            <img src={el.src} alt="user content" className="w-48" />
          )}
          {el.type === "button" && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              {el.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PublishedSite;
