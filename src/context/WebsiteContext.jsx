import React, { createContext, useState } from "react";

// Create the context
export const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
  const [websiteData, setWebsiteData] = useState({
    websiteName: "",
    elements: [],
  });

  const updateWebsiteName = (name) => {
    setWebsiteData((prev) => ({ ...prev, websiteName: name }));
  };

  const addElement = (element) => {
    setWebsiteData((prev) => ({
      ...prev,
      elements: [...prev.elements, element],
    }));
  };

  const updateElement = (index, newElement) => {
    const updatedElements = [...websiteData.elements];
    updatedElements[index] = newElement;
    setWebsiteData((prev) => ({
      ...prev,
      elements: updatedElements,
    }));
  };

  const removeElement = (index) => {
    const updatedElements = websiteData.elements.filter((_, i) => i !== index);
    setWebsiteData((prev) => ({
      ...prev,
      elements: updatedElements,
    }));
  };

  return (
    <WebsiteContext.Provider
      value={{
        websiteData,
        setWebsiteData,
        updateWebsiteName,
        addElement,
        updateElement,
        removeElement,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};
