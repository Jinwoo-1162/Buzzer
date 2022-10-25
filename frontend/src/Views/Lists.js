import React from "react";
import Sidebar from "../Components/Sidebar.js";
import MainLists from "../Components/Lists/MainLists.js"
import "../CSS/Lists.css";

function Lists() {
  return (
    <div className="explore">
      <Sidebar />
      <MainLists />
    </div>
  );
}

export default Lists;


