import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/landing page/Main";
import ResetPassword from "./pages/reset password/Main";
import ForgotPassword from "./pages/forgot password/Main";
import Dashboard from "./components/dashboard/Dashboard";
import MainAuth from "./pages/authentication/MainAuth";


const App = () => {
  return(
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/" element = {<Main /> }></Route>
        <Route path="/dashboard" element = {<Dashboard />} ></Route>
        <Route path="/reset password" element = {<ResetPassword />} ></Route>
        <Route path="/forgot password" element = {<ForgotPassword />} ></Route>
        <Route path="/signup" element = {<MainAuth />} ></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
