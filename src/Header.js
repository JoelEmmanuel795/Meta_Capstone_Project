import logo from './Logo.svg';

function Header(props) {
    return (
        <header>
            <img src={logo} width={200} alt="Little Lemon Logo"></img>
            {props.children}
        </header>
    )
}

export default Header