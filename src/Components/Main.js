import React, { useReducer, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from './api';
import reservations from '../Content/reservations.png';
import rice_meat_dish from '../Content/rice_meat_dish.jpg';
import dish_misc from '../Content/dish_misc.jpg';

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
  const location = useLocation();
  const reservationsRef = useRef(null);

  // On mount or route change, scroll to the reservations section.
  useEffect(() => {
    if (location.pathname === "/reservations" && reservationsRef.current) {
      reservationsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

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
    <main id="reservations-section">
      <div className="container-booking-content">
        <div className="container-booking-form">
          <h1>Book a Table</h1>
          {/*
            Pass availableTimes and dispatch into the BookingForm.
            BookingForm can dispatch("UPDATE_TIMES") whenever the user picks a new date.
          */}
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>
        <div className="reservation-images">
          <img src={rice_meat_dish} alt="Rice and kebab dish" className="reservation-image reservation-image1"></img>
          <img src={reservations} alt="Mediterranean salad dish" className="reservation-image reservation-image2"></img>
          <img src={dish_misc} alt="Misc. Mediterranean dishes: pizza, kebab, peta, etc." className="reservation-image reservation-image3"></img>
        </div>
      </div>
    </main>
  );
}

export default Main;

// Export for testing if needed
export { initializeTimes, updateTimes };
