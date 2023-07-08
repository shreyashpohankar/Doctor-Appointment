import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import DoctorComponent from "../components/Doctor/DoctorComponent";

import AdminComponent from "../components/AdminComponent/AdminComponent";
import DoctorProfile from "../components/Doctor/DoctorProfile/DoctorProfile";
import DoctorSetAppointment from "../components/Doctor/DoctorSetAppointment/DoctorSetAppointment";
import DoctorAppointments from "../components/Doctor/DoctorAppointments/DoctorAppointments";

import Login from "../components/Auth/Login";
import UserComponent from "../components/User/UserComponent";
import UserProfile from "../components/User/UserProfile/UserProfile";
import UserBookAppointment from "../components/User/UserBookAppointment/UserBookAppointment";
import UserAppointments from "../components/User/UserAppointments/UserAppointments";

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: '/admin',
      element: <AdminComponent/>
  },
    {
      path: '/user',
      element: <UserComponent/>,
      children: [
        {
          path: '/user',
          element: <UserProfile/>
        },
        {
          path: '/user/bookAppointment',
          element: <UserBookAppointment/>
        },
        {
          path: '/user/appointments',
          element: <UserAppointments/>
        }
      ]
    },
    {
      path: '/doctor',
      element: <DoctorComponent/>,
      children: [
        { path: '/doctor',
          element: <DoctorProfile/>
        },
        {
          path: '/doctor/setAppointment',
          element: <DoctorSetAppointment/>
        },
        {
          path: '/doctor/appointments',
          element: <DoctorAppointments/>
        }
      ]
    },
  ]);

  export default mainRouter;