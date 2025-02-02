import './CSS/App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Head from './Components/Head';
import SpecialsSection from './Components/SpecialsSection';
import Testimonials from './Components/Testimonials';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Head/>
      <div className="App">
        <Nav/>
        <Header/>
        <SpecialsSection/>
        <Testimonials/>
        <Main/>
        <Footer/>
        <Routes>
          <Route path="/reservations"/>
        </Routes>
      </div>
    </>
  );
}

export default App

//<div className="App">
//Homepage
//</div>