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
import EditMeeting from "./pages/AdminPage/AdminDashboard/AdminMeetings/EditMeeting";
import EditCourse from "./pages/AdminPage/AdminDashboard/AdminCourses/EditCourse";
import AdminCourses from "./pages/AdminPage/AdminDashboard/AdminCourses/AdminCourses";
import CreateCourse from "./pages/AdminPage/AdminDashboard/AdminCourses/CreateCourse";
import CourseController from "./pages/AdminPage/AdminDashboard/CourseController";
import AdminContact from "./pages/AdminPage/AdminDashboard/AdminContact/AdminContact";
import AdminUser from "./pages/AdminPage/AdminDashboard/Admin-user/AdminUser";



function App() {

  const router = createBrowserRouter([
    {
      path: "https://edu-meeting-front-end.vercel.app/",
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
      path: "https://edu-meeting-front-end.vercel.app/admin/meetings",
      element: (
        <ProtectedRoute>
          <MeetingsController />
        </ProtectedRoute>
      ),

    },

    {
      path: "https://edu-meeting-front-end.vercel.app/admin/meetings/create",
      element: (
        <ProtectedRoute>
          <CreateMeeting />
        </ProtectedRoute>
      ),

    },
    {
      path: "https://edu-meeting-front-end.vercel.app/admin/meetings/edit/:id",
      element: (
        <ProtectedRoute>
          <EditMeeting />
        </ProtectedRoute>
      ),

    },
    {
      path: "https://edu-meeting-front-end.vercel.app/admin/meetings/managemeetings",
      element: (
        <ProtectedRoute>
          <AdminMeetings />
        </ProtectedRoute>
      ),

    },
    {
      path: "https://edu-meeting-front-end.vercel.app/admin/courses",
      element: (
        <ProtectedRoute>
          <CourseController />
        </ProtectedRoute>
      ),

    },


    {
      path: "https://edu-meeting-front-end.vercel.app/admin/courses/create",
      element: (
        <ProtectedRoute>
          <CreateCourse />
        </ProtectedRoute>
      ),

    },
    {
      path: "https://edu-meeting-front-end.vercel.app/admin/courses/edit/:id",
      element: (
        <ProtectedRoute>
          <EditCourse />
        </ProtectedRoute>
      ),

    },

    {
      path: "https://edu-meeting-front-end.vercel.app/admin/courses/managecourses",
      element: (
        <ProtectedRoute>
          <AdminCourses />
        </ProtectedRoute>
      ),

    },
    {
      path: "admin/contact",
      element: (
        <ProtectedRoute>
          <AdminContact />
        </ProtectedRoute>
      ),

    },

    {
      path: "admin/user",
      element: (
        <ProtectedRoute>
          <AdminUser />
        </ProtectedRoute>
      ),

    },





    { path: "https://edu-meeting-front-end.vercel.app/meetingAllDetails", element: <MeetingAllDetails /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
