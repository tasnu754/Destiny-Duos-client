import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from './Pages/MainPage/Mainpage';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Biodatas from './Pages/Biodatas/Biodatas';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Signin from './Pages/Signin/Signin';
import FirebaseAuth from './Auth/FirebaseAuth';
import { getAllBiodatas, getSingleBiodata } from './APIs/biodatas';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import BiodataDetails from './Routes/PrivateRoutes/BiodataDetails';
import PrivateRoute from './Routes/PrivateRoutes/PrivateRoute';
import CheckOut from './Routes/PrivateRoutes/CheckOut';
import Dashboard from './Pages/Dashboard/Dashboard';
import EditBiodata from './Pages/Dashboard/EditBiodata';
import ViewBiodata from './Pages/Dashboard/ViewBiodata';
import ContactRequests from './Pages/Dashboard/ContactRequests';
import Favourites from './Pages/Dashboard/Favourites';
import UserRoutes from './Routes/UserRoutes/UserRoutes';
import MarriegeForm from './Pages/Dashboard/MarriegeForm';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import ManageUser from './Pages/Dashboard/ManageUser';
import AdminRoutes from './Routes/AdminRoutes/AdminRoutes';
import ApprovePremium from './Pages/Dashboard/ApprovePremium';
import ApproveReq from './Pages/Dashboard/ApproveReq';
import Statistics from './Pages/Dashboard/Statistics';
import AdminSuccessRoute from './Pages/Dashboard/AdminSuccessRoute';
import ProfileViews from './Pages/Dashboard/ProfileViews';

const queryClient = new QueryClient();



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
        loader: async () => await getAllBiodatas(),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/biodataDetails/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => await getSingleBiodata(params.id),
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: async ({ params }) => await getSingleBiodata(params.id),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "editBiodata",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <EditBiodata></EditBiodata>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "viewBiodata",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <ViewBiodata></ViewBiodata>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "contactRequest",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <ContactRequests></ContactRequests>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "favourites",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <Favourites></Favourites>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "married",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <MarriegeForm></MarriegeForm>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "adminDashboard",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminDashboard></AdminDashboard>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageUser></ManageUser>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "approvePremium",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ApprovePremium></ApprovePremium>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "approveContactReq",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ApproveReq></ApproveReq>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "statistic",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Statistics></Statistics>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "profileViews",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ProfileViews></ProfileViews>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "successStories",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminSuccessRoute></AdminSuccessRoute>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseAuth>
        <RouterProvider router={router} />
      </FirebaseAuth>
    </QueryClientProvider>
  </React.StrictMode>
);
