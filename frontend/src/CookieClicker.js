import "./CookieClicker.css";
import cookie from "./cookie.png";
import { useState } from "react";

function CookieClicker(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="clicker-contain">
      <h2>{count === 0 ? "Click Me" : count}</h2>
      <img id="cookie" src={cookie} alt="cookie" onClick={increment} />
      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CookieClicker;
