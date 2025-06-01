import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    siteName: "",
    ownerName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStart = () => {
    localStorage.setItem("siteData", JSON.stringify(formData));
    navigate("/builder");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-full max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Website Builder</h1>
        <p className="text-gray-600 mb-6">Create your website with a powerful drag-and-drop interface.</p>

        <form className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 font-semibold">Website Name</label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="My Awesome Site"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Short Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe your site..."
            ></textarea>
          </div>
        </form>

        <button
          onClick={handleStart}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
        >
          Start Building
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
