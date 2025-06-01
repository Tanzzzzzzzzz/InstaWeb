// src/pages/WebsitePreview.jsx
import React, { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';
import { Rnd } from 'react-rnd';

const WebsitePreview = () => {
  const { websiteData } = useContext(WebsiteContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 p-10" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-5xl mx-auto border-4 border-purple-500">
        <h1 className="text-5xl font-extrabold text-purple-800 text-center mb-10">
          {websiteData.websiteName || 'Your Website Preview'}
        </h1>

        <div className="relative w-full h-[60vh] border border-dashed border-purple-400 rounded-xl bg-purple-50 overflow-hidden">
          {websiteData.elements.map((el, index) => (
            <Rnd
              key={index}
              default={{ x: 50 + index * 20, y: 50 + index * 20, width: 'auto', height: 'auto' }}
              bounds="parent"
              enableResizing={false}
            >
              <div className="p-2 bg-white rounded shadow-md cursor-move">
                {el.type === 'heading' && (
                  <h2 style={{ fontSize: el.fontSize, color: el.customColor }} className="font-semibold">
                    {el.content || 'Heading'}
                  </h2>
                )}
                {el.type === 'paragraph' && (
                  <p style={{ fontSize: el.fontSize, color: el.customColor }}>
                    {el.content || 'Paragraph content here...'}
                  </p>
                )}
                {el.type === 'image' && el.src && (
                  <img
                    src={el.src}
                    alt="Uploaded"
                    className="rounded-lg shadow-md max-w-[200px]"
                  />
                )}
              </div>
            </Rnd>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
