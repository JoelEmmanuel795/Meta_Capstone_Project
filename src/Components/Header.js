import '../CSS/Header.css'
import image from "../Content/header-img.jpg";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <div className="container-header-text">
                <h1>Little Lemon</h1>
                <h2 style={{ color: 'white' }}>Chicago</h2>
                <h4 style={{ color: 'white' }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                <div className="button-container">
                    <button className="reservationsButton">
                        <a>
                            <Link to="/reservations" className="nav-item" aria-label="Go to Reservations Section">
                                Reservations
                            </Link>
                        </a>
                    </button>
                </div>
            </div>
            <div className="container-header-img">
                <img src={image} alt="A man holding bruschettas"/>
            </div>
            {props.children}
        </header>
    )
}

export default Header