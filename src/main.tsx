import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import ArtCrafts from './pages/ArtCrafts.tsx'
import Shirts from './pages/Shirts.tsx'
import SpecialOccasion from './pages/SpecialOccasion.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path:'/about-us',
        element: <AboutUs />
      },
      {
        path:'/art-and-crafts',
        element: <ArtCrafts />
      },
      {
        path:'/shirts',
        element: <Shirts />
      },
      {
        path:'/special-occasions',
        element: <SpecialOccasion />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
