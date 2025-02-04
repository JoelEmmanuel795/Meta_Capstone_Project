import './CSS/App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Head from './Components/Head';
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
        </Routes>
      </div>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>