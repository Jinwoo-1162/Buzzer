import cookie from "./cookie.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Cookie Clicker</h2>
        <img id="cookie" src={cookie} onClick={incrementCount} />
        <h2>{count}</h2>
      </header>
    </div>
  );
}

export default App;
