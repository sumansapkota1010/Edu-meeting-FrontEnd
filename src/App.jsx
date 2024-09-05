import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common/Layout";
import Meeting from "./pages/Meeting";
import MeetingDetails from "./pages/MeetingDetails";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./pages/ProtectedRoute";
import MeetingAllDetails from "./pages/MeetingAllDetails";

import AdminPanel from "./pages/AdminPage/AdminDashboard/AdminPanel";
import AdminMeetings from "./pages/AdminPage/AdminDashboard/AdminMeetings/AdminMeetings";
import MeetingsController from "./pages/AdminPage/AdminDashboard/MeetingsController";
import CreateMeeting from "./pages/AdminPage/AdminDashboard/AdminMeetings/CreateMeeting";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "", element: <Home /> }],
    },
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignUp /> },
    { path: "meetings", element: <Meeting /> },
    { path: "meetings/category/:category", element: <Meeting /> },
    { path: "meetings/:id", element: <MeetingDetails /> },
    {
      path: "admin",
      element: (
        <ProtectedRoute>
          <AdminPanel />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin/meetings",
      element: (
        <ProtectedRoute>
          <MeetingsController />
        </ProtectedRoute>
      ),

    },
    {
      path: "admin/meetings/create",
      element: (
        <ProtectedRoute>
          <CreateMeeting />
        </ProtectedRoute>
      ),

    },

    {
      path: "admin/meetings/managemeetings",
      element: (
        <ProtectedRoute>
          <AdminMeetings />
        </ProtectedRoute>
      ),

    },




    { path: "/meetingAllDetails", element: <MeetingAllDetails /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
