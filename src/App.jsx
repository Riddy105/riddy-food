import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Root from "./components/Root";
import { useState } from "react";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
