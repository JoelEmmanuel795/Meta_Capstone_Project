import '../CSS/Footer.css'
import logo_vert from "../Content/logo_vert.png";

// function Footer(props) {
//     return (
//         <footer>
//             <div className='container-footer'>
//                 <img src={logo_vert} width={150} alt="Little Lemon Logo"></img>
//                 <p>Copyright Little Lemon</p>
//                 {props.children}
//             </div>
//         </footer>
//     )
// }

// export default Footer

import React from "react";

export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer-logo">
                <img src={logo_vert} width={130} alt="Little Lemon Logo"></img>
            </div>

            <div className="footer-contact">
                <h3>Reach out to us</h3>
                <p><strong>Address:</strong><br /> Little Lemon Restaurant<br /> 123 Main Street, Anytown, USA 12345</p>
                <p><strong>Email:</strong><br /> info@littlelemon.com</p>
                <p><strong>Phone:</strong><br /> (555) 123-4567</p>
            </div>

            <div className="footer-info">
                <h3>Get to know us</h3>
                <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/press">Press Releases</a></li>
                <li><a href="/recipes">Exclusive Recipes</a></li>
                <li><a href="/kitchen">Our Kitchen</a></li>
                </ul>
            </div>

            <div className="footer-social">
                <h3>Connect with us</h3>
                <ul>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
