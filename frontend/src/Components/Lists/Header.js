import React from "react";
import "../../CSS/Lists.css";
import Share from "../../Images/share.png";

function Header() {
  return (
    <div className = "headerContainer">
        <div className = "listTitle">
          <h1>Lists</h1>
        </div>
        {/* <div className = "newListIcon">
          <img className= "headerIcon" src={Share} alt="icon"></img>
        </div>        
        <div className = "moreIcon">
          <img className= "headerIcon" src={Share} alt="icon"></img>
        </div> */}
    </div>
  );
}

export default Header;
