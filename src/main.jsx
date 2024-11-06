import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./Home";
import Profile from "./pages/Profile";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);