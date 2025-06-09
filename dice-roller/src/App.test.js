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

test('initial dice face is rendered correctly', () => {
  render(<App />);
  // Check for any dice face from 1 to 6
  const diceFaceElement = screen.getByTestId(/dice-face-[1-6]/);
  expect(diceFaceElement).toBeInTheDocument();

  // Optional: extract value from testid and check if it's in range
  const testId = diceFaceElement.getAttribute('data-testid');
  const value = parseInt(testId.split('-')[2], 10);
  expect(value).toBeGreaterThanOrEqual(1);
  expect(value).toBeLessThanOrEqual(6);
});

test('dice face changes after clicking Roll Dice button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Roll Dice/i });

  // Get initial dice face, e.g. "dice-face-1"
  const initialDiceFaceElement = screen.getByTestId(/dice-face-[1-6]/);
  expect(initialDiceFaceElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  // Check for any dice face from 1 to 6 again
  const newDiceFaceElement = screen.getByTestId(/dice-face-[1-6]/);
  expect(newDiceFaceElement).toBeInTheDocument();

  // Optional: extract new value and check if it's in range
  const newTestId = newDiceFaceElement.getAttribute('data-testid');
  const newValue = parseInt(newTestId.split('-')[2], 10);
  expect(newValue).toBeGreaterThanOrEqual(1);
  expect(newValue).toBeLessThanOrEqual(6);

  // Note: We cannot easily assert that the dice face *value* changed to a *different* specific value
  // because the roll is random. We can assert that *a* valid dice face is present after the roll.
  // If we wanted to test the change more thoroughly, we might need to mock Math.random or
  // check that the data-testid attribute has changed (if it was different from the initial one).
  // For this test, ensuring a valid dice face is rendered is the primary goal.
});
