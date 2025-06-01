import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages2/LandingPage'
import Builder from './pages2/Builder';
import PublishedSite from './pages2/PublishedSite';
import WebsitePreview from './pages2/WebsitePreview';
import { WebsiteProvider } from "./context/WebsiteContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },

    {
      path: "/site",
      element: <WebsitePreview/>,
    },

    {
      path: "/builder",
      element: <Builder/>,
    },

    {
      path: "/published",
      element: <PublishedSite/>,
    },
  ])

  return (
    <div>
      <WebsiteProvider>
        <RouterProvider router={router}/>
      </WebsiteProvider>
      
      
    </div>
  )
}

export default App
