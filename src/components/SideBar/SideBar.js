import React from 'react';
import './SideBar.css'
import menuImg from "../../images/menu-icon__COLOR_icon-color.svg"

export default function SideBar() {

    const [isMenuActive, setIsMenuActive] = React.useState(false);

    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <>
            <div className="SideBar__wrapper">
                <div className={`SideBar__menuSideBar ${isMenuActive ? "SideBar__menu_active" : ""}`} id="menuSideBar">
                    <button type="button" onClick={toggleMenu} className="SideBar__menu-btn" id="menu-btn" href="#">
                        <img className="SideBar__menuImg" src={menuImg} alt="бургер меню" />
                    </button>
                    <nav className="SideBar__menu-list">
                        <a href="/movies" className="Header__movies">Фильмы</a>
                        <a href="/saved-movies" className="Header__movies">Сохранённые фильмы</a>
                        <a href="/profile">
                            <button className="Header__accountButton Header__accountButtonMenu">Аккаунт</button>
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}