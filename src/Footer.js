import logo from "./logo_hor.png";

function Footer(props) {
    return (
        <footer>
            <img src={logo} width={150} alt="Little Lemon Logo"></img>
            Copyright Little Lemon
            {props.children}
        </footer>
    )
}

export default Footer