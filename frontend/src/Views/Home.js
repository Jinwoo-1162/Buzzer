import React from "react";
import "../CSS/Home.css";
import Sidebar from "../Components/Sidebar.js";
import Header from "../Components/Header";
import RandomQuote from "../RandomQuote";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Header />
      <a href="/randomQuote">random</a>
      <a href="/About">about</a>
      <a href="/Home">home</a>
      <Link to="Home"/>
    </div>
  );
}

export default Home;
