import { React, useEffect, useState } from "react";
import "./CSS/App.css";
import Home from "./Views/Home.js";
import ForYou from "./Views/ForYou";
import Trending from "./Views/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./Views/Lists.js";
import { MessagesPage } from "./Components/MessagesPage";

import axios from "axios";

function App() {
  const [text, setText] = useState("test");
  const [random, setRandom] = useState("test");

  useEffect(() => {
    getInfo();
  }, [random]);

  const getInfo = async () => {
    console.log("requesting from server");
    let result = await axios.get("http://localhost:8080/");
    setText(result.data.message);
  };

  return (
    <>
      <span>{text}</span>
      <button
        onClick={() => {
          setRandom((random) => random + " random");
        }}
      >
        Click Me
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<ForYou />} />
          <Route path="/Explore/Trending" element={<Trending />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/Messages" element={<MessagesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
