import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import  ReactDOM  from "react-dom/client";
  import React from "react";
  import Home from "./Home";
  
  const router = createBrowserRouter([{
    path:'/',
    element: <Home/>
  }]);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>
  );
  
