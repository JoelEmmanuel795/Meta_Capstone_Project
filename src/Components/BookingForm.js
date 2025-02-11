import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // ✅ Import Yup for validation
import "../CSS/BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [filteredTimes, setFilteredTimes] = useState(availableTimes); // ✅ Stores valid times

  // ✅ Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => new Date().toISOString().split("T")[0];

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      reservationDate: "",
      selectedTime: "",
      guests: "",
      occasion: "",
      firstName: "",   // ➜ ADDED
      lastName: "",    // ➜ ADDED
      email: "",       // ➜ ADDED
    },
    validationSchema: Yup.object({
      reservationDate: Yup.string()
        .required("Date is required")
        .test("is-future-date", "Date must be today or later", (value) => {
          return value && value >= getTodayDate();
        }),
      selectedTime: Yup.string().required("Please select a time"),
      guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "At least 1 guest required")
        .max(10, "Maximum 10 guests allowed"),
      occasion: Yup.string().required("Please select an occasion"),
  
      // ➜ NEW VALIDATION FIELDS
      firstName: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
      lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  // ✅ Call dispatch when the user selects a date to fetch new times
  useEffect(() => {
    if (formik.values.reservationDate) {
      dispatch({ type: "UPDATE_TIMES", date: formik.values.reservationDate });
    }
  }, [formik.values.reservationDate, dispatch]);

  // ✅ Filter times when today is selected (only allow future times)
  useEffect(() => {
    if (formik.values.reservationDate === getTodayDate()) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      const validTimes = availableTimes.filter((time) => {
        const [hour, minute] = time.split(":").map(Number);
        return hour > currentHour || (hour === currentHour && minute > currentMinute);
      });

      setFilteredTimes(validTimes);
    } else {
      setFilteredTimes(availableTimes);
    }
  }, [formik.values.reservationDate, availableTimes]);

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      {/* FIRST NAME */}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}

      {/* LAST NAME */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}

      {/* EMAIL */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      {/* ✅ Date Field */}
      <label htmlFor="reservation-date">Choose date</label>
      <input
        type="date"
        id="reservation-date"
        aria-label="Choose a reservation date"
        min={getTodayDate()} // ✅ Prevent past dates
        {...formik.getFieldProps("reservationDate")}
      />
      {formik.touched.reservationDate && formik.errors.reservationDate ? (
        <div className="error">{formik.errors.reservationDate}</div>
      ) : null}

      {/* ✅ Time Selection (Filtered for today) */}
      <label htmlFor="reservation-time">Choose time</label>
      <select
        id="reservation-time"
        aria-label="Select a reservation time"
        {...formik.getFieldProps("selectedTime")}
      >
        {filteredTimes.length > 0 ? (
          filteredTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option disabled>No available times</option>
        )}
      </select>
      {formik.touched.selectedTime && formik.errors.selectedTime ? (
        <div className="error">{formik.errors.selectedTime}</div>
      ) : null}

      {/* ✅ Number of Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        aria-label="Select a number of guests"
        className="numberGuests"
        {...formik.getFieldProps("guests")}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className="error">{formik.errors.guests}</div>
      ) : null}

      {/* ✅ Occasion Selection */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Select the occasion"
        {...formik.getFieldProps("occasion")}
      >
        <option value="">Select an Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className="error">{formik.errors.occasion}</div>
      ) : null}

      {/* ✅ Submit Button (Disabled if Form is Invalid) */}
      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Confirm your reservation"
        disabled={!formik.isValid || !formik.dirty}
        className="formSubmit"
      />
    </form>
  );
}

export default BookingForm;
