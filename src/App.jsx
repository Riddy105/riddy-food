import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Root from "./components/Root";
import { useState } from "react";
import MainCourse from "./components/MainCourse";
import { Provider } from "react-redux";
import store from "./store";
import { AnimatePresence } from "framer-motion";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "maincourse", element: <MainCourse /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={route}></RouterProvider>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
