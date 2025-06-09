import React, { useState } from 'react';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Roller</h1>
        <div className="dice">
          {diceValue}
        </div>
        <button onClick={rollDice} className="roll-button">
          Roll Dice
        </button>
      </header>
    </div>
  );
}

export default App;
