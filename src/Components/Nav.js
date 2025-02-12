import React, { useState, useEffect } from "react";
import '../CSS/Nav.css';
import logo from '../Content/Logo.svg';
import icon_hamburger_menu from '../Content/icon_hamburger_menu.svg';
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

  // State for tracking the active link (desktop logic)
  const [activeLink, setActiveLink] = useState("home");

  // State to track whether we’re in mobile view (i.e. width < 1256)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1256);
  // State to track if the mobile menu (hamburger) is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1256);
      // Optionally close the mobile menu when resizing to desktop view
      if (window.innerWidth >= 1256) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver to check if the About section is in view (desktop only)
  useEffect(() => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about-section");
      if (!aboutSection) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveLink("about");
            } else {
              setActiveLink("home");
            }
          });
        },
        { threshold: 0.3 }
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

  // Scroll event to hide/show nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setMobileMenuOpen(false);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Always scroll to top on route change, with a small delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Toggle function for the hamburger menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // The list of nav links as a component so you can reuse it for desktop and mobile
  const NavLinks = () => (
    <ul>
      <li>
        <Link
          to="/"
          onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
          className={(activeLink === "home" && location.pathname === "/") ? "active-link" : ""}
          aria-label="Go to Homepage"
        >
          Home
        </Link>
      </li>
      <li>
        <a
          key="about-section"
          href="#about-us"
          onClick={(e) => { handleAboutClick(e); setMobileMenuOpen(false); }}
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
          aria-label="Menu"
        >
          Menu
        </a>
      </li>
      <li>
        <Link
          to="/reservations"
          onClick={() => { setMobileMenuOpen(false) }}
          className={location.pathname === "/reservations" ? "active-link" : ""}
          aria-label="Go to Reservations Section"
        >
          Reservations
        </Link>
      </li>
      <li>
        <Link
          to="/order-online/under-construction"
          onClick={() => { setMobileMenuOpen(false) }}
          className={location.pathname === "/order-online/under-construction" ? "active-link" : ""}
          aria-label="Go to Order Online Section (currently under construction)"
        >
          Order Online
        </Link>
      </li>
      <li>
        <Link
          to="/login/under-construction"
          onClick={() => { setMobileMenuOpen(false) }}
          className={location.pathname === "/login/under-construction" ? "active-link" : ""}
          aria-label="Go to Login Section (currently under construction)"
        >
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className={`nav ${visible ? 'visible' : 'hidden'}`}>
      <div className="inner-flex">
        <img src={logo} width={200} alt="Little Lemon Logo" />
        
        {/* Conditionally render desktop menu or mobile hamburger */}
        {isMobile ? (
          <div className="mobile-nav">
            <img
              src={icon_hamburger_menu}
              alt="Hamburger Menu"
              className="hamburger-icon"
              onClick={toggleMobileMenu}
            />
            {/* Mobile dropdown menu with animation class */}
            {mobileMenuOpen && (
              <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <NavLinks />
              </div>
            )}
          </div>
        ) : (
          <NavLinks />
        )}
  
        {props.children}
      </div>
    </nav>
  );  
}

export default Nav;
