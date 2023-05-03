import React, { useState, createContext } from "react";
import "./sass/main.scss";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./pages/landing page/Main";
import ResetPassword from "./pages/reset password/Main";
import ForgotPassword from "./pages/forgot password/Main";
import Dashboard from "./components/dashboard/Dashboard";
import Step1 from "./pages/authentication/Step1";
import Step2 from "./pages/authentication/Step2";
import Step3 from "./pages/authentication/Step3";
import Step4 from "./pages/authentication/Step4";
import Step5 from "./pages/authentication/Step5";
import VerifiedAccount from "./pages/authentication/VerifiedAccount";
import Signin from "./pages/authentication/Signin";
import NewPassword from "./pages/reset password/NewPassword";
import Success from "./pages/reset password/Success";
import Signout from "./pages/authentication/Signout";
import PageNotFound from "./static/404/PageNotFound";
import EmailTemplate from "./static/emailtemplate/EmailTemplate";
import Home from "./pages/home/Home";
import ClickedMovie from "./pages/clicked movie/ClickedMovie";
import Watchlist from "./pages/watchlist/Watchlist";

export const ToggleContext = createContext(null);

const Layout = () => {
 const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };
  return (
    <ToggleContext.Provider value={toggle}>
      <Dashboard handleClick={handleClick} />
      <Outlet />
    </ToggleContext.Provider>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/step1",
    element: <Step1 />
  },
  {
    path: "/step2",
    element: <Step2 />
  },
  {
    path: "/step3",
    element: <Step3 />
  },
  {
    path: "/step4",
    element: <Step4 />
  },
  {
    path: "/step5",
    element: <Step5 />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/verified-account",
    element: <VerifiedAccount />
  },
  {
    path: "/new-password",
    element: <NewPassword />
  },
  {
    path: "/reset-success",
    element: <Success />
  },
  {
    path: "/signout",
    element: <Signout />
  },
  {
    path: "/email-template",
    element: <EmailTemplate />
  },
  {
    path: "/*",
    element: <PageNotFound />
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "watchlist",
        element: <Watchlist />
      },
      {
        path: "clicked-movie",
        element: <ClickedMovie />
      },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
