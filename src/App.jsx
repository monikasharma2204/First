import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/home/Home";
import Webinar from "./routes/webinar/Webinar";
import ErrorPage from "./routes/ErrorPage";
import WorkShop from './routes/workshop/Workshop';
import SocialMedia from "./routes/socialmedia/SocialMedia";
import Features from "./routes/features/Features";
import Footer from './routes/footer/Footer';


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WorkShop />
      <SocialMedia />
      <Footer />
      

    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [      {
        path: "/",
        element: <Home />,
      },
      {
        path: "webinar",
        element: <Webinar />,
      },
      {
        path:"workshop",
        element:<WorkShop />,
      },
      {
        path:"socialmedia",
        element:<SocialMedia />,
      },
      {
        path:"features",
        element:<Features />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
