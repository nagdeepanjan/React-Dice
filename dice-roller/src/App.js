import React, { useState } from 'react';
import './App.css';
import DiceFace from './DiceFace'; // Import the DiceFace component

function App() {
  const [diceValue, setDiceValue] = useState(1); // Default to 1 for initial render

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Roller</h1>
        <DiceFace value={diceValue} /> {/* Use the DiceFace component */}
        <button onClick={rollDice} className="roll-button">
          Roll Dice
        </button>
      </header>
    </div>
  );
}

export default App;
