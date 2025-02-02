import '../CSS/Footer.css'
import logo from "../Content/logo_hor.png";

function Footer(props) {
    return (
        <footer>
            <div className='container-footer'>
                <img src={logo} width={150} alt="Little Lemon Logo"></img>
                <p>Copyright Little Lemon</p>
                {props.children}
            </div>
        </footer>
    )
}

export default Footer