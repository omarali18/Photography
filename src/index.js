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
import Register from './pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddPhotographer from './pages/Dashboard/AddPhotographer/AddPhotographer';
import MySchedule from './pages/Dashboard/MySchedule/MySchedule';
import ViewOneGrapher from './pages/ViewOneGrapher/ViewOneGrapher';

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
    // element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
  },
  {
    path: "/signUp",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/bookingnow/:id",
    element: <PrivateRoute><ViewOneGrapher></ViewOneGrapher></PrivateRoute>,
  },
  {
    path: "/dashboard",
    // element: <Dashboard></Dashboard>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardBox />,
      },
      {
        path: "/dashboard/AddPhotographer",
        element: <AddPhotographer />,
      },
      {
        path: "/dashboard/MySchedule",
        element: <MySchedule />,
      },
      {
        path: "/dashboard/AddPhoto",
        element: <AddPhotography />,
      },
      {
        path: "/dashboard/AllPhoto",
        element: <AllPhotography />,
        loader: () => fetch('http://localhost:5000/allPhotos')
      },
      {
        path: "/dashboard/AddVideo",
        element: <AddVideography />,
      },
      {
        path: "/dashboard/AllVideo",
        element: <AllVideography />, 
        loader: () => fetch('http://localhost:5000/allVideo')
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
