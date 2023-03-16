import React from "react";
import "./sass/main.scss";
import { Routes, Route } from "react-router-dom";
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
import Watchlist from "./pages/watchlist/Watchlist";

const App = () => {
  return (
    // <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/step1" element={<Step1 />}></Route>
        <Route path="/step2" element={<Step2 />}></Route>
        <Route path="/step3" element={<Step3 />}></Route>
        <Route path="/step4" element={<Step4 />}></Route>
        <Route path="/step5" element={<Step5 />}></Route>
        <Route path="/verified-account" element={<VerifiedAccount />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/new-password" element={<NewPassword />}></Route>
        <Route path="/reset-success" element={<Success />}></Route>
        <Route path="/signout" element={<Signout />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
      </Routes>
    //  </BrowserRouter>
  );
};

export default App;
