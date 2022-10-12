import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import About from "./Views/About";
import ErrorPage from "./Views/ErrorPage";
import Messages from "./Views/Messages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RandomQuote from "./RandomQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/random_quote" element={<RandomQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
