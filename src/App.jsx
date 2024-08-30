import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common/Layout";
import Meeting from "./pages/Meeting";
import MeetingDetails from "./pages/MeetingDetails";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./pages/admin/adminDashboard";

import { useSelector } from "react-redux";

function App() {


  /*  const { data: user } = useSelector((state) => state.auth)
 
   console.log(user)
 
   const isAdmin = user && user.role === "admin" */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: "admin",
          element: <AdminDashboard />
        }
      ],

    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "meetings",
      element: <Meeting />,
    },
    {
      path: "meetings/:meetingdetails",
      element: <MeetingDetails />,
    },


  ]);
  <ToastContainer />
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
