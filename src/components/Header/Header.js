import './Header.css'

export default function Header(props) {
    return (
        <header className="Header">
            {props.children}
        </header>
    )
}