import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Fibonacci</h1>
        </p>
        <p>
          Ktory element ciagu Fibonacciego chcesz wyswietlic?
        </p>
          <input 
            type="number" 
            name="element"
            min="0"
            size="5"
            font-size="30px"
            defaultValue="0"
            onChange={handleChange}
            />
        <p>
          Element nr {input.element} ma wartosc: {fibonacci(input.element)}
        </p>
      </header>
    </div>
  );
}

function fibonacci(element) {
  var x = 1;
  var y = 0;
  var temp;
  while(element > 0) {
    temp = x;
    x = x + y;
    y = temp;
    element--;
  }
  return y;
}

export default App;
