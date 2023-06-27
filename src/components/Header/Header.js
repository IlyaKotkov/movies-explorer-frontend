import logo from "../../images/logo.png"
import './Header.css'

export default function Header(props) {
    return (
        <header className="header">
            <img 
                className="headerLogo" 
                src={logo} 
                alt="Логотип сайта movies-explorer"
            />
            {props.children}
        </header>
    )
}