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


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
    },

    

    {
      path: "/builder",
      element: <Builder/>,
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
