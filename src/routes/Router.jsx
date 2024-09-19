import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/main.jsx'; // or .js depending on the file
import Home from "../pages/Home";
import Login from '../pages/login/Login.jsx'
import SignUp from "../pages/Signup/SignUp";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Schedule from "../pages/Schedule/Schedule";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminHome from "../pages/Dashboard/Admin/Home/Home";
import Members from "../pages/Dashboard/Admin/Members/Members";
import Trainers from "../pages/Dashboard/Admin/Trainers/Trainers";
import MealPlan from "../pages/Dashboard/Admin/MealPlan/MealPlan";
import AdminPrivateRoute from "../components/PrivateRoute/AdminRoute";
import UserHome from "../pages/Dashboard/User/Home/Home";
import Routine from "../pages/Dashboard/User/Routine/Routine";
import DashboardHomePage from "../pages/Dashboard/Home";
import UserMeal from "../pages/Dashboard/User/Meal/Meal";
import UserPrivateRoute from "../components/PrivateRoute/UserPrivateRoute";
import TrainerPrivateRoute from "../components/PrivateRoute/TrainerPrivateRoute";
import Mystudents from "../pages/Dashboard/Trainer/MyStudents/Mystudents.jsx"
import TrainerHome from "../pages/Dashboard/Trainer/Home/Home.jsx"
import Availability from "../pages/Dashboard/Trainer/Availability/Availability.jsx"
import Membership from "../pages/Dashboard/User/Membership/Membership";
import Trainer from "../pages/Dashboard/User/Trainer/Trainer";
import Activity from "../pages/Dashboard/User/Activity/Activity";
import Payments from "../pages/Dashboard/User/Payments/Payments";
import Settings from "../pages/Dashboard/Settings";
import Plans from "../pages/Dashboard/Admin/Plans/Plans";
import NewMessages from "../pages/Dashboard/Admin/NewMessages/NewMessages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <>
            <ScrollToTop />
            <Home />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <ScrollToTop />
            <About />
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            <ScrollToTop />
            <Services />
          </>
        ),
      },
      {
        path: "/schedule",
        element: (
          <>
            <ScrollToTop />
            <Schedule />
          </>
        ),
      },
      {
        path: "/gallery",
        element: (
          <>
            <ScrollToTop />
            <Gallery />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <ScrollToTop />
            <Contact />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <ScrollToTop />
            <Login />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <ScrollToTop />
            <SignUp />
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHomePage />,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminPrivateRoute>
            <AdminHome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/members",
        element: (
          <AdminPrivateRoute>
            <Members />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/trainers",
        element: (
          <AdminPrivateRoute>
            <Trainers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/meal-plan",
        element: (
          <AdminPrivateRoute>
            <MealPlan />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/messages",
        element: (
          <AdminPrivateRoute>
            <NewMessages />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/plans",
        element: (
          <AdminPrivateRoute>
            <Plans />
          </AdminPrivateRoute>
        ),
      },
      // Users Routing
      {
        path: "/dashboard/user",
        element: (
          <UserPrivateRoute>
            <UserHome />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/routine",
        element: (
          <UserPrivateRoute>
            <Routine />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/meal",
        element: (
          <UserPrivateRoute>
            <UserMeal />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/membership",
        element: (
          <UserPrivateRoute>
            <Membership />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/trainer",
        element: (
          <UserPrivateRoute>
            <Trainer />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/activity",
        element: (
          <UserPrivateRoute>
            <Activity />
          </UserPrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/payments",
        element: (
          <UserPrivateRoute>
            <Payments />
          </UserPrivateRoute>
        ),
      },
      // Trainer
      {
        path: "/dashboard/trainer",
        element: (
          <TrainerPrivateRoute>
            <TrainerHome />
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/trainer/availability",
        element: (
          <TrainerPrivateRoute>
            <Availability />
          </TrainerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/trainer/students",
        element: (
          <TrainerPrivateRoute>
            <MyStudents />
          </TrainerPrivateRoute>
        ),
      },
      // Settings
      {
        path: "/dashboard/settings/:value?",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default router;
