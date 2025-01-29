import '../CSS/Header.css'
import image from "../Content/header-img.jpg";

function Header(props) {
    return (
        <header>
            <div className="container-header-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h4 style={{color: 'white'}}><br/>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                <div className="button-container">
                    <button>Reserve a Table</button>
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