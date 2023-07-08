import Header from "../Header/Header"
import logo from "../../images/logo.png"
import "./Profile.css"
import SideBar from "../SideBar/SideBar"

export default function Profile() {
    return (
        <>
            <Header>
                <div className="Header__moviesContainer">
                    <div className="Header__moviesLinkContainer">
                        <a href="/">
                            <img
                                className="Header__Logo"
                                src={logo}
                                alt="Логотип сайта movies-explorer"
                            />
                        </a>
                        <a href="/movies" className="Header__movies Header__moviesHidden">Фильмы</a>
                        <a href="/saved-movies" className="Header__movies Header__moviesHidden">Сохранённые фильмы</a>
                    </div>
                    <a href="/profile" className="Header__accountButton Header__accountButtonHidden">Аккаунт</a>
                    <SideBar />
                </div>
            </Header>
            <section className="Profile">
                <div className="Profile__container">
                    <h1 className="Profile__heading">Привет, Илья!</h1>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">Имя</p>
                        <p className="Profile__infoUser">Илья</p>
                    </div>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">E-mail</p>
                        <p className="Profile__infoUser">MopsBox2552@yandex.ru</p>
                    </div>
                    <button className="Profile__editButton">Редактировать</button>
                    <a href="/signin" className="Profile__exitButton">Выйти из аккаунта</a>
                </div>
            </section>
        </>
    )
}