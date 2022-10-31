import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Navbar from "../components/nav/Navbar";
import Home from "../../src/pages/home/Home";
import Login from "../../src/pages/login/Login";
import About from "../../src/pages/about/About";
import Detail from "../../src/pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
