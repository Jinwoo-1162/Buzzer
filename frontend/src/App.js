import logo from "./logo.svg";
import "./App.css";
import TextBox from "./TextBox";

function App() {
  return (
    <div className="App">
      <TextBox textcontent="I am Eva"/>
      <TextBox textcontent="I am Kurt"/>
      <TextBox textcontent="I am Fred"/>
    </div>
  );
}

export default App;