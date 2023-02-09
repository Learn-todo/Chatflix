import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/landing page/Main";
import ResetPassword from "./pages/reset password/Main";
import ForgotPassword from "./pages/forgot password/Main";

const App = () => {
  return(
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/" element = {<Main /> }></Route>
        <Route path="/reset password" element = {<ResetPassword />} ></Route>
        <Route path="/forgot password" element = {<ForgotPassword />} ></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
