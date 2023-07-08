import React from 'react';
import './SideBar.css'
import menuImg from "../../images/menu-icon__COLOR_icon-color.svg"
import exitimg from "../../images/Group.svg"

export default function SideBar() {

    const [isMenuActive, setIsMenuActive] = React.useState(false);
    const [isMenuActiveOverlay, setIsMenuActiveOverlay] = React.useState(false);

    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
        setIsMenuActiveOverlay(!isMenuActiveOverlay);
    }


    return (
        <>
            <button type="button" onClick={toggleMenu} className="SideBar__menu-btn-header" id="menu-btn-hed" >
                <img className="SideBar__menuImg" src={menuImg} alt="бургер меню" />
            </button>
            <div className={`SideBar__menuOverlay ${isMenuActiveOverlay ? "SideBar__menuOverlay_visible" : ""}`}>
                <div className="SideBar__wrapper">
                    <div className={`SideBar__menuSideBar ${isMenuActive ? "SideBar__menu_active" : ""}`} id="menuSideBar">
                        <button type="button" onClick={toggleMenu} className="SideBar__menu-btn" id="menu-btn" >
                            <img className="SideBar__menuImg" src={exitimg} alt="Кнопка крестика" />
                        </button>
                        <nav className="SideBar__menu-list">

                            <div className='SideBar__menu-list-container'>
                                <a href="/" className="Header__movies">Главная</a>
                                <a href="/movies" className="Header__movies">Фильмы</a>
                                <a href="/saved-movies" className="Header__movies">Сохранённые фильмы</a>
                            </div>                
                            <a href="/profile" className="Header__accountButton Header__accountButtonMenu">Аккаунт</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}