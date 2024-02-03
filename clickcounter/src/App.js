import React, { useState } from 'react';
import './App.css'; 

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="click-counter-container">
      <h1>The Button has been clicked <span>{count}</span> times</h1>
      <h2>Click the button to increase the count...! </h2>

      <button onClick={handleButtonClick}>Click me</button>

    </div>
  );
};

export default ClickCounter;
