import React from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import Notifications from "./Views/Notifications";
import ForYou from "./Views/ForYou";
import Trending from "./Views/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./Views/Lists.js";
import { MessagesPage } from "./Components/MessagesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Explore" element = {<ForYou />}/>
        <Route path="/Explore/Trending" element = {<Trending />}/>
        <Route path="/Lists" element = {<Lists />}/>
        <Route path="/Messages" element ={<MessagesPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
