import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Ensure this is always an array
  };
  
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return [...initializeTimes()]; // Spread into a new array to prevent mutation issues
      default:
        return state;
    }
  };

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes); 

    return (
        <main>
            <div  className="container-booking">
                <h1>Book a Table</h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
            </div>
        </main>
    )
}

export default Main;

export { initializeTimes, updateTimes };