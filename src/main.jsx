import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Countries from "./Components/Countries/Countries";
import Country from "./Components/Country/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Countries></Countries>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/country/:countryId",
        element: <Country></Country>,
        loader:({params})=>fetch(`https://restcountries.com/v3.1/all/${params.countryId}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
