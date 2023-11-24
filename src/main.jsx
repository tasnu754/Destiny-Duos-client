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
import { getAllBiodatas } from './APIs/biodatas';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/biodatas',
        element: <Biodatas></Biodatas>,
        loader: async() => await getAllBiodatas()
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuth>
      <RouterProvider router={router} />
    </FirebaseAuth>
  </React.StrictMode>
);
