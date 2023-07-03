import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"

export default function Movies() {
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
                        <a href="/movies" className="Header__movies">Фильмы</a>
                        <a href="/saved-movies" className="Header__movies">Сохранённые фильмы</a>
                    </div>
                    <a href="/profile">
                        <button className="Header__accountButton">Аккаунт</button>
                    </a>
                </div>
            </Header>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}