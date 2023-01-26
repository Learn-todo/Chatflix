import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/pages/landing page/Main";
import ResetPassword from "../src/pages/reset password/Main";
import ComponentShowcase from "./pages/component-showcase/Main";

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/reset password" element={<ResetPassword />}></Route>
        <Route path="/component" element={<ComponentShowcase />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
