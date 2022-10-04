import logo from "./logo.svg";
import "./App.css";
import TextBox from "./TextBox";
import Home from "./Views/Home";
import About from "./Views/About";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ErrorPage from "./Views/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
