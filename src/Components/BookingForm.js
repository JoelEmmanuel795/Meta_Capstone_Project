import React, { useState } from "react";
import "../CSS/BookingForm.css";

/**
 * BookingForm component now accepts 'availableTimes' (an array) and 'dispatch' (a function)
 * via props, because we've lifted those out of BookingForm into Main.
 */
function BookingForm({ availableTimes, dispatch }) {
  // Local states remain for the other form fields:
  const [selectedTime, setSelectedTime] = useState("17:00");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  // This will dispatch to update the times based on the newly selected date
  const handleDateChange = (event) => {
    // We include the selected date in the 'date' property of our action
    dispatch({ type: "UPDATE_TIMES", date: event.target.value });
  };

  return (
    <>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          aria-label="Choose a reservation date"
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          aria-label="Select a reservation time"
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          aria-label="Select a number of guests"
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          aria-label="Select the occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        {/* You can keep one submit button, or both if you like */}
        <input type="submit" value="Make Your reservation" aria-label="Confirm your reservation"/>
      </form>
    </>
  );
}

export default BookingForm;
