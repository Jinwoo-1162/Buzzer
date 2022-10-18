import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import Notifications from "./Views/Notifications";
import Explore from "./Views/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
