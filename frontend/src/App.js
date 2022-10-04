import logo from "./logo.svg";
import "./App.css";
import TextBox from "./TextBox";
import Home from "./Views/Home";
import About from "./Views/About";
import { BrowserRouter, Routes } from "react-router-dom";
import {Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
