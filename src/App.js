import './CSS/App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Head from './Components/Head';
import AboutWrapper from './Components/AboutWrapper';
import BookingPage from './Components/BookingPage';
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (
    <>
      <Head/>
      <div className="App">
        <Nav/>
        <Routes>
          <Route
            path="/reservations"
            element={<BookingPage/>}
          />
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/booking-confirmed"
            element={<ConfirmedBooking/>}
          />
          <Route
            path="/about-us"
            element={<AboutWrapper/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App

