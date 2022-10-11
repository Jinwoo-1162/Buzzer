import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import Explore from "./Views/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element = {<Explore />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
