import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/Product/AddProduct";
import Nike from "../Pages/Brand/Brand";
import Brand from "../Pages/Brand/Brand";
import Details from "../Pages/Product/Details";
import Update from "../Pages/Product/Update";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element : <Home></Home>,
          loader: () => fetch('/brands.json')
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/addproduct',
          element: <AddProduct></AddProduct>,
          
        },
        {
          path: '/brand/:brandName',
          element : <Brand></Brand>,
          loader: () => fetch('http://localhost:5001/products') 
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5001/details/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5001/update/${params.id}`)
        }
      ]
    },
  ]);

