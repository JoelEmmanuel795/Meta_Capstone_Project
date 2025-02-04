import React, { useState, useEffect } from "react";
import "../CSS/BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [selectedTime, setSelectedTime] = useState("17:00");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [isValid, setIsValid] = useState(false); 

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  useEffect(() => {
    const isDateValid = reservationDate >= getTodayDate();
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isFormValid = reservationDate && isDateValid && isGuestsValid && selectedTime && occasion;
    
    setIsValid(isFormValid); // ✅ Enable/Disable submit button
  }, [reservationDate, guests, selectedTime, occasion]);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setReservationDate(newDate);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  // Here is where we use `submitAPI`
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather any relevant form data into an object
    const formData = {
      time: selectedTime,
      guests: guests,
      occasion: occasion,
      date: reservationDate,
    };

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Choose a reservation date"
        min={getTodayDate()}
        value={reservationDate}
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
        <option>Other</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Confirm your reservation"
        disabled={!isValid}
      />
    </form>
  );
}

export default BookingForm;
