import React, { useState, useEffect} from "react";
import '../CSS/Nav.css'
import logo from '../Content/Logo.svg';
import {Link} from 'react-router-dom';


function Nav(props) {
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

    return (
        <nav className={`nav ${visible ? 'visible' : 'hidden'}`}>
          <div className="inner-flex">
            <img src={logo} width={200} alt="Little Lemon Logo"></img>
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><a key="about-section" href="#about" onClick={handleClick("about")}>About</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Menu</a></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Order Online</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Login</a></li>
            </ul>
            {props.children}
          </div>
        </nav>
    )
}

export default Nav