import React from "react";
import "./CSS/App.css";
import Sidebar from "./Components/Sidebar.js"
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
