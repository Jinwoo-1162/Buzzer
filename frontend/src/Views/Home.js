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
      {/* <a href="/randomQuote">random</a>
      <a href="/About">about</a>
      <a href="/Home">home</a> */}
      <Link to="/">Home</Link>
      <Link to="/messages">LINKMessages</Link>
      <a href="/messages">AMessages</a>
    </div>
  );
}

export default Home;
