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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
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
        path: "all-toys",
        element: <All_Toys></All_Toys>,
        loader: ()=>fetch('http://localhost:5000/toys/')
      },
      {
        path: "toy-details/:id",
        element: <Toy_details></Toy_details>,
        loader: ({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "my-toys",
        element:<My_toy></My_toy>,
        loader: ()=>fetch('http://localhost:5000/toys/')
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
