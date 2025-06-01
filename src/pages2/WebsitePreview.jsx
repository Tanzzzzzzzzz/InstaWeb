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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 text-white py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">{siteData.name || "My Awesome Website"}</h1>
          <p className="text-lg mt-2 text-indigo-100">Created by {siteData.owner || "You"}</p>
        </header>

        <main className="p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
          {elements.map((el) => {
            switch (el.type) {
              case "heading":
                return <h2 key={el.id} className="text-3xl font-bold text-purple-800 border-l-4 border-purple-500 pl-4">{el.content}</h2>;
              case "text":
                return <p key={el.id} className="text-lg leading-relaxed text-gray-700">{el.content}</p>;
              case "button":
                return (
                  <button
                    key={el.id}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded shadow-md"
                  >
                    {el.content}
                  </button>
                );
              case "image":
                return (
                  <div key={el.id} className="flex justify-center">
                    <img
                      src={el.content}
                      alt="Custom"
                      className="w-full max-w-md rounded-xl border shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </main>

        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteData.name || "My Website"}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default WebsitePreview;
