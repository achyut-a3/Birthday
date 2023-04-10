import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "../../Menu/Menu";
import SingleMenu from "../../page/SingleMenu/SingleMenu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Menu />} />

        <Route path="/product/:id" exact element={<SingleMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
