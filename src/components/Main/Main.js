import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import SideBar from "../SideBar/SideBar"


export default function Main({ isLoggedIn }) {
    return (
        <>
            <Header>
                {!isLoggedIn && (
                    <div className="Header__MainContainer">
                        <img
                            className="Header__Logo"
                            src={logo}
                            alt="Логотип сайта movies-explorer"
                        />
                        <div className="Header__Container">

                            <Link to="/signup" className='Header__mainRegisterButton'>Регистрация</Link>


                            <Link to="/signin" className='Header__mainAuthorizeButton'>Войти</Link>

                        </div>
                    </div>
                )}
                {isLoggedIn && (
                    <div className="Header__MainContainer">
                        <div className="Header__moviesLinkContainer">
                            <Link to="/">
                                <img
                                    className="Header__Logo"
                                    src={logo}
                                    alt="Логотип сайта movies-explorer"
                                />
                            </Link>
                            <Link to="/movies" className="Header__movies Header__moviesHidden">Фильмы</Link>
                            <Link to="/saved-movies" className="Header__movies Header__moviesHidden">Сохранённые фильмы</Link>
                        </div>
                        <Link to="/profile" className="Header__accountButton Header__accountButtonMain Header__accountButtonHidden">Аккаунт</Link>
                        <SideBar />
                    </div>
                )}
            </Header>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
            </main>
        </>
    )
}