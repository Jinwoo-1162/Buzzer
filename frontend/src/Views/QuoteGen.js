import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import "../CSS/Views.css";

function QuoteGen(props) {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getQuote() {
      const fetchedQuote = await axios.get("https://api.quotable.io/random");
      console.log(fetchedQuote);
      setQuote(fetchedQuote.data.content);
    }

    getQuote();
  }, []);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="quote-box">
      <Navbar />
      <div className="content-container">
        <h2 id="quote">Quote: {quote}</h2>
        <h2 id="count">Count: {count}</h2>
        <button onClick={incrementCount}>Click Me</button>
      </div>
    </div>
  );
}

export default QuoteGen;
