import '../CSS/Home.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SpecialsSection from './SpecialsSection';
import Testimonials from './Testimonials';

function Home() {
  return (
    <>
        <Header/>
        <SpecialsSection/>
        <Testimonials/>
        <Main/>
        <Footer/>
    </>
  );
}

export default Home;