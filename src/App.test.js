import { initializeTimes, updateTimes } from "./Components/Main";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import Main from "./Components/Main";
import { fetchAPI } from "./Components/api";
import { BrowserRouter } from "react-router-dom";

// ✅ Mock fetchAPI correctly at the top
jest.mock("./Components/api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

test("BookingForm can be submitted by the user", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn(); // Mock function
  const fakeTimes = ["17:00", "18:00"];

  render(<BookingForm availableTimes={fakeTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

  // Fill out some form fields
  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole("button", { value: /make your reservation/i });

  // Simulate user typing
  fireEvent.change(dateInput, { target: { value: "2025-01-01" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });

  // Submit the form
  fireEvent.click(submitButton);

  // ✅ Assert that submitForm was called
  expect(mockSubmitForm).toHaveBeenCalled();
});

test("initializeTimes returns mocked available times", () => {
  expect(initializeTimes()).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes updates times based on fetchAPI mock", () => {
  const currentState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2024-02-01" };

  const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; 
  fetchAPI.mockReturnValue(expectedState); // Mock fetchAPI return value

  const result = updateTimes(currentState, action); 

  expect(result).toStrictEqual(expectedState);
});
