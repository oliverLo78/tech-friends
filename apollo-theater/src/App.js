import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ review, setReview ] = useState("An amazing story of love and adventure.");
  const [ rating, setRating ] = useState(10);

  useEffect(() => {
    console.log(`Review rignt now is ${review}!`);
  }, [review, rating]);

  useEffect(() => {
    console.log(`Rating right now is ${rating}!`);
  }, [rating]);
  
  return (
    <div className="App">
      <h1>Current review is {review}</h1>
      <button onClick={() => setReview("a bad movie.")}>
        Bad Review
      </button>
      <button onClick={() => setReview("a great movie.")}>
        Great Review
      </button>
      <h2>Current rating is {rating}.
      </h2>
      <button onClick={() => setRating(rating + 1)}>
        Increase Rating
      </button>
      <button onClick={() => setRating(rating - 1)}>
        Decrease Rating
      </button>
    </div>
  );
}

export default App;
