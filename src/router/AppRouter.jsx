import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Navbar from "../components/nav/Navbar";
import Home from "../../src/pages/home/Home";
import Login from "../../src/pages/login/Login";
import About from "../../src/pages/about/About";
import Detail from "../../src/pages/detail/Detail";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
