import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from './api';

// Step 2.1: Update initializeTimes to use fetchAPI for today's date
const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
}

// Step 2.2: Update updateTimes to call fetchAPI with the date from the action
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // action.date is the string from <input type="date" />
      // Convert it to a Date object:
        const selectedDate = new Date(action.date);
        return fetchAPI(selectedDate);
    default:
        return state;
  }
};

function Main() {
  // useReducer to manage the array of available times
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Optional useEffect to “re‑fetch” on mount, or whenever you might want an effectful re-fetch.
  // With your synchronous fetchAPI, this is somewhat redundant, but useful if fetchAPI was truly async.
  useEffect(() => {
    // Example: On mount, dispatch an action to ensure we fetch times for "today"
    const todayString = new Date().toISOString().split("T")[0]; // Format: 'YYYY-MM-DD'
    dispatch({ type: "UPDATE_TIMES", date: todayString });
  }, []);

    // Define submitForm function which accepts the formData from the API
    const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
        if (isSuccess) {
            navigate("/booking-confirmed"); // Navigate to confirmation page
        } else {
            alert("Submission failed!");
        }
    };

  return (
    <main>
      <div className="container-booking">
        <h1>Book a Table</h1>
        {/*
          Pass availableTimes and dispatch into the BookingForm.
          BookingForm can dispatch("UPDATE_TIMES") whenever the user picks a new date.
        */}
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      </div>
    </main>
  );
}

export default Main;

// Export for testing if needed
export { initializeTimes, updateTimes };
