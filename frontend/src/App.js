import "./App.css";
import CookieClicker from "./CookieClicker";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookie" element={<CookieClicker />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <h2>Cookie Clicker</h2>
    //     <img id="cookie" src={cookie} onClick={incrementCount} />
    //     <h2>{count}</h2>
    //   </header>
    // </div>
  );
}

export default App;
