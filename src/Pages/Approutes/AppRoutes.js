import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../../page/Project/Home/About";
import Portfolio from "../../page/Project/Portfolio/Portfolio";
import Project from "../../page/Project/Project";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/project" exact element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
