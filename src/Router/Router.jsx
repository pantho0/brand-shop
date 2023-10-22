import {
    createBrowserRouter,
  } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/Product/AddProduct";
import Brand from "../Pages/Brand/Brand";
import Details from "../Pages/Product/Details";
import Update from "../Pages/Product/Update";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/404/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
          
        },
        {
          path: '/brand/:brandName',
          element : <Brand></Brand>,
          loader: () => fetch('http://localhost:5001/products') 
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5001/details/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5001/update/${params.id}`)
        },
        {
          path: '/cart',
          element: <PrivateRoute> <Cart></Cart></PrivateRoute>,
          loader: () => fetch('http://localhost:5001/cart')
        }
      ]
    },
  ]);

