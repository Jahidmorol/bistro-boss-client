import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Deshbord from "../layouts/Deshbord";
import Main from "../layouts/Main";
import AddItem from "../pages/deshboard/AddItem/AddItem";
import Alluser from "../pages/deshboard/Allusers/Alluser";
import ManageItems from "../pages/deshboard/ManageItems/ManageItems";
import MyCart from "../pages/deshboard/MyCart/MyCart";
import Payment from "../pages/deshboard/Payment/Payment";
import Home from "../pages/home/home/Home";
import SignIn from "../pages/login/SignIn/SignIn";
import SignUp from "../pages/login/SignUp/SignUp";
import Menu from "../pages/menu/Menu/Menu";
import Order from "../pages/order/Order/Order";
import AdminRout from "./AdminRout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Deshbord></Deshbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "allusers",
        element: <AdminRout><Alluser></Alluser></AdminRout>,
      },
      {
        path: "additem",
        element: <AdminRout><AddItem></AddItem></AdminRout>,
      },
      {
        path: "manageitems",
        element: <AdminRout><ManageItems></ManageItems></AdminRout>,
      },
    ],
  },
]);
