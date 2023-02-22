import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landing page/Main";
import ResetPassword from "./pages/reset password/Main";
import ForgotPassword from "./pages/forgot password/Main";
import Dashboard from "./components/dashboard/Dashboard";
import Step1 from "./pages/authentication/Step1";
import Step2 from "./pages/authentication/Step2";



const App = () => {
  return(
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/" element = {<LandingPage /> }></Route>
        <Route path="/dashboard" element = {<Dashboard />} ></Route>
        <Route path="/reset password" element = {<ResetPassword />} ></Route>
        <Route path="/forgot password" element = {<ForgotPassword />} ></Route>
        <Route path="/Step1" element = {<Step1 />} ></Route>
        <Route path="/Step2" element = {<Step2 />} ></Route>


      </Routes>
    </BrowserRouter>
  );
};

export default App;
