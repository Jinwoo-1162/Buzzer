import React from "react";
import "../CSS/Home.css";
import Sidebar from "../Components/Sidebar.js";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Header />
    </div>
  );
}

export default Home;
