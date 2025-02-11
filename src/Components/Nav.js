import React, { useState, useEffect } from "react";
import '../CSS/Nav.css';
import logo from '../Content/Logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Nav(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Click handler for the About link.
  // If on the homepage, scroll to the About section; otherwise navigate.
  const handleAboutClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/about-us");
    }
  };

  // State for hiding/showing nav on scroll (existing functionality)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // *** New State to Track Active Link ***
  // "home" when the homepage or when the about section is not visible,
  // "about" when the about section is visible or on the /about-us route.
  const [activeLink, setActiveLink] = useState("home");

  // IntersectionObserver to check if the About section is in view.
  // (Only runs on the homepage because that's where the About section exists.)
  useEffect(() => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about-section");
      if (!aboutSection) return; // in case it is not rendered

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            // You can adjust the threshold if needed.
            if (entry.isIntersecting) {
              setActiveLink("about");
            } else {
              setActiveLink("home");
            }
          });
        },
        { threshold: 0.5 } // 50% of the section must be visible to count as "active"
      );
      observer.observe(aboutSection);

      return () => {
        observer.disconnect();
      };
    }
  }, [location.pathname]);

  // On routes other than "/", override the active link based on the pathname.
  useEffect(() => {
    if (location.pathname !== "/") {
      if (location.pathname === "/about-us") {
        setActiveLink("about");
      } else {
        setActiveLink("home");
      }
    }
  }, [location.pathname]);

  // Existing scroll event to hide/show nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Always scroll to top on route change.
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <nav className={`nav ${visible ? 'visible' : 'hidden'}`}>
      <div className="inner-flex">
        <img src={logo} width={200} alt="Little Lemon Logo" />
        <ul>
          <li>
            {/* For Home, we add the active-link class if activeLink is "home" and we're on "/" */}
            <Link 
              to="/" 
              onClick={scrollToTop} 
              className={(activeLink === "home" && location.pathname === "/") ? "active-link" : ""}
              aria-label="Go to Homepage"
            >
              Home
            </Link>
          </li>
          <li>
            {/* For About, we add the active-link class if activeLink is "about" */}
            <a
              key="about-section"
              href="#about-us"
              onClick={handleAboutClick}
              className={activeLink === "about" ? "active-link" : ""}
              aria-label="Go to the About Section"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="https://www.littlelemon.ie/wp-content/uploads/a-la-carte-Little-Lemon.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Menu
            </a>
          </li>
          <li>
            <Link 
              onClick={scrollToTop} 
              to="/reservations" 
              className={location.pathname === "/reservations" ? "active-link" : ""}
              aria-label="Go to Reservations Section"
            >
              Reservations
            </Link>
          </li>
          <li>
            <a 
              href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project" 
              aria-label="Order Online"
            >
              Order Online
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project" 
              aria-label="Login"
            >
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
