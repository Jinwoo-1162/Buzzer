import axios from "axios";
import { useState } from "react";

function RandomQuote() {
  const [randomQuote, setQuote] = useState("");

  async function handleQuote() {
    const randomQuote = await axios.get("https://api.quotable.io/random");
    setQuote(randomQuote.data.content);
  }
  handleQuote();
  return (
    <div className="RandomQuote">
        <header className="RandomQuote"></header>
        <h1>RandomQuote</h1>
        <h1>{randomQuote}</h1>;
        <a href = "/Home">  Home </a>
    </div>
  )
  }
  
export default RandomQuote;