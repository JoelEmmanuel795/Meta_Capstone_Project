// import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from "./Components/Main";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import Main from "./Components/Main";

test("BookingForm can be submitted by the user", () => {
  // Mock a dispatch (since form expects a dispatch prop)
  const mockDispatch = jest.fn();
  const fakeTimes = ["17:00", "18:00"];
  
  render(<BookingForm availableTimes={fakeTimes} dispatch={mockDispatch} />);

  // Fill out some form fields
  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole("button", { value: /make your reservation/i });

  // Simulate user typing
  fireEvent.change(dateInput, { target: { value: "2025-01-01" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });

  // Submit the form
  fireEvent.click(submitButton);

  // Then check if the onSubmit logic ran
  // If you have an actual onSubmit or dispatch you want to check, you can test that here
  // e.g. expect(mockDispatch).toHaveBeenCalledWith(...)
});

test("renders the static booking text", () => {
  render(<Main />);
  // Check for an element containing “Book a Table” or something similar
  const heading = screen.getByText(/book a table/i);
  expect(heading).toBeInTheDocument();
});

test("initializeTimes returns the correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toStrictEqual(expectedTimes);
});

test("updateTimes resets available times to the initial state", () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00"];
  const action = { type: "UPDATE_TIMES", date: "2024-02-01" };

  const expectedState = initializeTimes(); 
  const result = updateTimes(currentState, action); 

  console.log("Expected:", expectedState);
  console.log("Received:", result);

  expect(result).toStrictEqual(expectedState);
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

