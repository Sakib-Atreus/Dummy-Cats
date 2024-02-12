import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import IndividualUser from "../components/IndividualUser/IndividualUser";
import AddUser from "../components/AddUser/AddUser";
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/:id',
          element: <IndividualUser></IndividualUser>,
          loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`)
        },
        {
          path: '/addUser',
          element: <AddUser></AddUser>
        },
      ]
    },
  ]);