
import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landing page/Main";
import ResetPassword from "./pages/reset password/Main";
import ForgotPassword from "./pages/forgot password/Main";
import Dashboard from "./components/dashboard/Dashboard";
import Step1 from "./pages/authentication/Step1";
import Step2 from "./pages/authentication/Step2";
import Step3 from "./pages/authentication/Step3";
import Step4 from "./pages/authentication/Step4";
import Watchlist from "./pages/watchlist/Watchlist";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<LandingPage /> }></Route>
        <Route path="/dashboard" element = {<Dashboard />} ></Route>
        <Route path="/reset-password" element = {<ResetPassword />} ></Route>
        <Route path="/forgot-password" element = {<ForgotPassword />} ></Route>
        <Route path="/Step1" element = {<Step1 />} ></Route>
        <Route path="/Step2" element = {<Step2 />} ></Route>
        <Route path="/Step3" element = {<Step3 />} ></Route>
        <Route path="/Step4" element = {<Step4 />} ></Route>
        <Route path="/watchlist" element = {<Watchlist/>} ></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
