import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AboutUs from './pages/AboutUs/About/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs/ContactUs';
import MediaMarketing from './pages/MediaMarketing/MediaMarketing/MediaMarketing';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AddPhotography from './pages/Dashboard/AddPhotography/AddPhotography';
import AddVideography from './pages/Dashboard/AddVideography/AddVideography';
import AllVideography from './pages/Dashboard/AllVideography/AllVideography';
import AllPhotography from './pages/Dashboard/AllPhotography/AllPhotography';
import DashboardBox from './pages/Dashboard/DashboardBox/DashboardBox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/marketing",
    element: <MediaMarketing></MediaMarketing>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardBox />,
      },
      {
        path: "/dashboard/AddPhoto",
        element: <AddPhotography />,
      },
      {
        path: "/dashboard/AllPhoto",
        element: <AllPhotography />,
        loader: () => fetch('https://photography-server-cyan.vercel.app/allPhotos')
      },
      {
        path: "/dashboard/AddVideo",
        element: <AddVideography />,
      },
      {
        path: "/dashboard/AllVideo",
        element: <AllVideography />,
        loader: () => fetch('https://photography-server-cyan.vercel.app/allVideo')
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
