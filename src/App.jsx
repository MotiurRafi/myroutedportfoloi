import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/blog";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Services",
          element: <Services/>
        },
        {
          path: "/Portfolio",
          element: <Portfolio/>
        },
        {
          path: "/Blog",
          element: <Blog/>
        },
        {
          path: "/Contact",
          element: <Contact/>
        }
      ]
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
