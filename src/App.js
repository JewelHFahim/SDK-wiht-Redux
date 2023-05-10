import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Router/Router";

const App = () => {
  return (
    <div>
      <Toaster  />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
