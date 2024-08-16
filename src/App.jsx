import BackgroundVideo from "./components/common/BackgroundVideo/BackgroundVideo"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/common/Layout"
import Meeting from "./pages/Meeting"
import MeetingDetails from "./pages/MeetingDetails"
import Login from "./pages/Login"

import SignUp from "./pages/SignUp"




function App() {

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
          path: "meetings",
          element: <Meeting />,
          children: [
            {
              path: ":meetingdetails",
              element: <MeetingDetails />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />
        },
      ],
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
