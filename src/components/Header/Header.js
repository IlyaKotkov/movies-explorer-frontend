import logo from "../../images/logo.png"
import './Header.css'

export default function Header(props) {
    return (
        <header className="Header">
            <div className="Header__MainContainer">
                <img
                    className="Header__Logo"
                    src={logo}
                    alt="Логотип сайта movies-explorer"
                />
                {props.children}
            </div>
        </header>
    )
}