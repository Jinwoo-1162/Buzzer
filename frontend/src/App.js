import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import About from "./Views/About";
import ErrorPage from "./Views/ErrorPage";
import Messages from "./Views/Messages"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/Messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
