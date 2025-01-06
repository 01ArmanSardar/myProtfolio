import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Component/Home';
import Project from './Component/Project';
import Blog from './Component/Blog';
import About from './Component/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/project',
        element: <Project></Project>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
