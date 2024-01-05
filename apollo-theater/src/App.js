import logo from './logo.svg';
import './App.css';

const [firstReview, second] = [
  "An amazing story of love and adventure.",
  "Absolutely riveting!",
  "I loved this movie."
];

console.log(firstReview);
console.log(second);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
