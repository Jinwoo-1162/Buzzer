import "../CSS/CookieClicker.css";
import cookie from "../Images/cookie.png";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/Views.css";

function CookieClicker(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="cookie-clicker">
      <Navbar />
      <div className="clicker-contain">
        <h2>{count === 0 ? "Click Me" : count}</h2>
        <img id="cookie" src={cookie} alt="cookie" onClick={increment} />
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CookieClicker;
