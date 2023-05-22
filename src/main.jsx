import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Common from "./Components/Common/Common";
import Home from "./Components/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Error from "./Components/Pages/Error";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import "./index.css";
import Page404 from "./Components/Pages/Page404";
import AuthProvider from "./Components/Provider/AuthProvider";
import All_Toys from "./Components/toys/All_Toys";
import My_toy from "./Components/toys/My_toy";
import Add_Toy from "./Components/toys/Add_Toy";
import Toy_details from "./Components/toys/Toy_details";
import Update_toy from "./Components/toys/Update_toy";
import Single_toy from "./Components/home_components/Single_toy";
import PrivateRoute from "./Components/Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('https://cars-server-eta.vercel.app/toys/')
      },
  
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      // {
      //   path: "/chef-reciepies/:id",
      //   element:<PrivateRoute> <ChefResiepes></ChefResiepes></PrivateRoute>,
      //   // loader: ({ prarams }) =>
      //   //   fetch(`http://localhost:5000/chef/${prarams.id}`)
      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "single-toy/:id",
        element:<Single_toy></Single_toy>,
        loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "all-toys",
        element: <PrivateRoute><All_Toys></All_Toys></PrivateRoute>,
        loader: ()=>fetch('https://cars-server-eta.vercel.app/toys/')
      },
      {
        path: "toy-details/:id",
        element: <PrivateRoute><Toy_details></Toy_details></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "update-toy/:id",
        element:<Update_toy></Update_toy>,
        loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "my-toys",
        element:<PrivateRoute><My_toy></My_toy></PrivateRoute>,
        loader: ()=>fetch('https://cars-server-eta.vercel.app/toys/')
      },
      {
        path: "add-toys",
        element:<Add_Toy></Add_Toy>,
      },

    ],
  },

  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
