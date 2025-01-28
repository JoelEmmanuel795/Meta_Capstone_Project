import '../CSS/Header.css'

function Header(props) {
    return (
        <header>
            {props.children}
        </header>
    )
}

export default Header