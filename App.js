import React, { useState, useEffect } from 'react';
import './App.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const quotes = [
      { text: 'Life is what happens when you\u2019re busy making other plans.', author: 'John Lennon' },
      { text: 'Get busy living or get busy dying.', author: 'Stephen King' },
      { text: 'You only live once, but if you do it right, once is enough.', author: 'Mae West' },
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  };

  useEffect(() => {
    fetchQuote(); // Fetch initial quote
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <div id="quote-box" className="quote-box">
        <p id="text" className="quote-text">{quote}</p>
        <p id="author" className="quote-author">- {author}</p>
        <div className="buttons">
          <button id="new-quote" onClick={handleNewQuote} className="new-quote-btn">
            New Quote
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`\"${quote}\" - ${author}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-quote-btn"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteMachine;
