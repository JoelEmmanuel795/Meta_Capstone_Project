import "../CSS/BookingForm.css";
import {useState} from 'react';

function BookingForm() {
    const [date, setDate] = useState("")
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    const [selectedTime, setSelectedTime] = useState("17:00")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    return (
    <>
      <form className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            >
            {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
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
            onChange={(e) => setGuests(e.target.value)}
            />
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
