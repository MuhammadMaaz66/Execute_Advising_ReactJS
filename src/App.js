import React from "react";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
