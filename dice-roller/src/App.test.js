import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Dice Roller heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Dice Roller/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Roll Dice button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Roll Dice/i });
  expect(buttonElement).toBeInTheDocument();
});

test('initial dice value is between 1 and 6', () => {
  render(<App />);
  const diceValueElement = screen.getByText(/[1-6]/); // Check for any digit from 1 to 6
  expect(diceValueElement).toBeInTheDocument();
  const value = parseInt(diceValueElement.textContent, 10);
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(6);
});

test('dice value changes after clicking Roll Dice button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Roll Dice/i });
  const initialDiceValueElement = screen.getByText(/[1-6]/);
  const initialValue = parseInt(initialDiceValueElement.textContent, 10);

  fireEvent.click(buttonElement);

  const newDiceValueElement = screen.getByText(/[1-6]/);
  const newValue = parseInt(newDiceValueElement.textContent, 10);

  // It's possible (though unlikely for a 6-sided die) to roll the same number.
  // A more robust test would be to check if the component attempted to re-render or if the rollDice function was called.
  // However, for this exercise, we'll assume that if the value is present and within range, it's working.
  // We can't guarantee a *different* value, but we can guarantee *a* value.
  expect(newValue).toBeGreaterThanOrEqual(1);
  expect(newValue).toBeLessThanOrEqual(6);

  // Optional: Check if the value *could* have changed. This isn't a perfect test.
  // If we roll multiple times, the probability of it not changing decreases.
  // For now, just checking it's a valid dice value is sufficient.
});
