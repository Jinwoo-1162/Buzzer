import "./CSS/App.css";
import CookieClicker from "./Views/CookieClicker";
import Home from "./Views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Views/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookie" element={<CookieClicker />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
