import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Home";
import Portfolio from "../../page/Project/Portfolio/Portfolio";
import Project from "../../page/Project/Project";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="/about" exact element={<Home />} />
        <Route path="/project" exact element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
