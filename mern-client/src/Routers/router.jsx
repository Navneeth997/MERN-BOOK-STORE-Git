import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../components/Home/Home";

import Shop from "../components/Shop/Shop";
import Blog from "../components/Blog";
import SingleBook from "../components/Shop/SingleBook";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UploadBooks from "../components/Dashboard/UploadBooks";
import ManageBooks from "../components/Dashboard/ManageBooks";
import EditBooks from "../components/Dashboard/EditBooks";
import Signup from "../components/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //Adding child routes using children and make sure to upload Outlet.

    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/shop",
        element: <Shop />,
      },
      // Add more routes here as needed. For example:
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
      },
    ],
  },

  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBooks/>,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks/>,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks/>,
        loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)

      }
    ],
  },
  {
    path : "sign-up",
    element : <Signup/>
  }

]);

export default router;
