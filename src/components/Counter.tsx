import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
  const MIN = 3;
  const MAX = 10;

  const [counter, setCounter] = useState(5);

  const increment = () => {
    setCounter(c => (c < MAX ? c + 1 : c));
  };

  const decrement = () => {
    setCounter(c => (c > MIN ? c - 1 : c));
  };

  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={increment}>+</button>
      <span className="counter-value">{counter}</span>
      <button className="counter-btn" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
