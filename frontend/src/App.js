import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import AllNotifications from "./Views/AllNotifications";
import ForYou from "./Views/ForYou";
import Trending from "./Views/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./Views/Lists.js";
import Profile from "./Views/Profile.js";
import { MessagesPage } from "./Components/MessagesPage";
import Results from "./Views/Results";
import axios from "axios";
import { useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notifications" element={<AllNotifications />} />
        <Route path="/Explore" element={<ForYou />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Lists" element={<Lists />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Messages" element={<MessagesPage />} />
        <Route path="/search" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
