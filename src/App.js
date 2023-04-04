import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        setQuotes(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomIndex);
  };

  return (
    <div className="quote-container">
      {quotes[randomIndex] && (
        <div className="quote">
          <p>{quotes[randomIndex].text}</p>
          <p className="author">{quotes[randomIndex].author}</p>
        </div>
      )}
      <div className="btn-container">
        <button className="btn" onClick={handleClick}>
          Random Quote
        </button>
      </div>
    </div>
  );
}

export default App;
