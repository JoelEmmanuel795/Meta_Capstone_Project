import './CSS/App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Head from './Components/Head';
import BookingPage from './Components/BookingPage';
import Main from './Components/Main'
import {Routes, Route} from 'react-router-dom';

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
        </Routes>
      </div>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>