import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // Sonra əlavə olunacaq
      // {
      //   path: "/cars",
      //   element: <Cars />,
      // },
      //
      // {
      //   path: "/cars/:id",
      //   element: <Details />,
      // },
    ],
  },


  // Layout-dan kənar səhifələr
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);


export default router;