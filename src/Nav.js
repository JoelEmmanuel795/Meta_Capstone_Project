import './Nav.css'
import logo from './Logo.svg';

function Nav(props) {
    return (
        <nav>
            <img src={logo} width={200} alt="Little Lemon Logo"></img>
            <ul>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Home</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">About</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Menu</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Reservations</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Order Online</a></li>
                <li><a href="https://github.com/JoelEmmanuel795/Meta_Capstone_Project">Login</a></li>
            </ul>
            {props.children}
        </nav>
    )
}

export default Nav