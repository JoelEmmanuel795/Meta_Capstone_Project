import React from "react"; // Add this line to avoid ReferenceError
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import { initializeTimes, updateTimes } from "./Components/Main";
import { fetchAPI } from "./Components/api";

// ✅ Mock fetchAPI correctly
jest.mock("./Components/api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

describe("BookingForm - HTML5 Attribute Validation", () => {
  test("Date input field should have 'min' attribute set to today's date", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    const today = new Date().toISOString().split("T")[0];
    
    expect(dateInput).toHaveAttribute("min", today);
  });

  test("Guests input field should have 'min' and 'max' attributes", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Submit button should be disabled initially", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    const submitButton = screen.getByRole("button", { name: /confirm your reservation/i });
    
    expect(submitButton).toBeDisabled();
  });
});

describe("BookingForm - JavaScript Validation Tests", () => {
  // test("Valid form submission enables the submit button", async () => {
  //   const mockSubmitForm = jest.fn();
  
  //   render(<BookingForm availableTimes={["18:00"]} dispatch={jest.fn()} submitForm={mockSubmitForm} />);
  
  //   // Fill out form fields
  //   fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-01-01" } });
  //   fireEvent.blur(screen.getByLabelText(/choose date/i));
  
  //   fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
  //   fireEvent.blur(screen.getByLabelText(/number of guests/i));
  
  //   fireEvent.change(screen.getByLabelText(/select the occasion/i), { target: { value: "Birthday" } });
  //   fireEvent.change(screen.getByLabelText(/select a reservation time/i), { target: { value: "18:00" } });
  
  //   // Wait for the submit button to be enabled
  //   const submitButton = screen.getByRole("button", { name: /confirm your reservation/i });
  //   await waitFor(() => expect(submitButton).toBeEnabled());
  
  //   // Submit the form
  //   await act(async () => {
  //     fireEvent.click(submitButton);
  //   });
  
  //   // Ensure `mockSubmitForm` is called with correct data
  //   await waitFor(() =>
  //     expect(mockSubmitForm).toHaveBeenCalledWith({
  //       reservationDate: "2025-01-01",
  //       selectedTime: "18:00",
  //       guests: "4",
  //       occasion: "Birthday",
  //     })
  //   );
  // });
  

  test("Invalid date input should show error", async () => {
    render(<BookingForm availableTimes={["18:00"]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2023-01-01" } });
    fireEvent.blur(screen.getByLabelText(/choose date/i));

    // Wait for error message to appear
    expect(await screen.findByText(/date must be today or later/i)).toBeInTheDocument();
  });

  test("Invalid guests input should show error", async () => {
    render(<BookingForm availableTimes={["18:00"]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "15" } });
    fireEvent.blur(screen.getByLabelText(/number of guests/i));

    // Wait for error message to appear
    expect(await screen.findByText(/maximum 10 guests allowed/i)).toBeInTheDocument();
  });

  test("initializeTimes should return mocked available times", () => {
    // Ensure fetchAPI is mocked before calling initializeTimes
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  
    expect(initializeTimes()).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("updateTimes should update available times based on selected date", () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", date: "2024-02-01" };

    const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    fetchAPI.mockReturnValue(expectedState);

    const result = updateTimes(currentState, action);
    expect(result).toStrictEqual(expectedState);
  });
});
