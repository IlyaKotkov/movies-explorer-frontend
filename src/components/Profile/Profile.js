import Header from "../Header/Header"
import logo from "../../images/logo.png"
import "./Profile.css"
import SideBar from "../SideBar/SideBar"
import { Link } from "react-router-dom"

import { useContext } from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useNavigate } from "react-router"

export default function Profile({ emailUser, onExit }) {

    const currentUser = useContext(CurrentUserContext)

    const navigate = useNavigate()
    function signOut() {
      localStorage.removeItem('jwt');
      navigate('/signin', { replace: true });
      onExit()
    }

    return (
        <>
            <Header>
                <div className="Header__moviesContainer">
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
                    <Link to="/profile" className="Header__accountButton Header__accountButtonHidden">Аккаунт</Link>
                    <SideBar />
                </div>
            </Header>
            <section className="Profile">
                <div className="Profile__container">
                    <h1 className="Profile__heading">Привет, {currentUser.name}!</h1>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">Имя</p>
                        <p className="Profile__infoUser">{currentUser.name}</p>
                    </div>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">E-mail</p>
                        <p className="Profile__infoUser">{emailUser}</p>
                    </div>
                    <button className="Profile__editButton">Редактировать</button>
                    <button onClick={signOut} className="Profile__exitButton">Выйти из аккаунта</button>
                </div>
            </section>
        </>
    )
}