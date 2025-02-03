import React, { useState, useEffect } from "react";
import '../CSS/Nav.css';
import logo from '../Content/Logo.svg';
import { Link, useLocation} from 'react-router-dom';

function Nav(props) {
  // Define the scrollToTop function inside the component
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    scrollToTop(); // Call it whenever the location changes
  }, [location.pathname]); // Dependency array ensures it runs on route change

  return (
    <nav className={`nav ${visible ? 'visible' : 'hidden'}`}>
      <div className="inner-flex">
        <img src={logo} width={200} alt="Little Lemon Logo" />
        <ul>
          <li>
            <Link to="/" className="nav-item" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <a key="about-section" href="#about" onClick={handleClick("about")}>
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">
              Menu
            </a>
          </li>
          <li>
            <Link onClick={scrollToTop} to="/reservations" className="nav-item">
              Reservations
            </Link>
          </li>
          <li>
            <a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">
              Order Online
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">
              Login
            </a>
          </li>
        </ul>
        {props.children}
      </div>
    </nav>
  );
}

export default Nav;
