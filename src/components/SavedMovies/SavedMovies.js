import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import imageMovie from "../../images/pic__COLOR_pic.png"
import imgDelete from "../../images/d6.png"
import SideBar from "../SideBar/SideBar"

export default function SavedMovies(props) {
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
                    <a href="/profile">
                        <button className="Header__accountButton Header__accountButtonHidden">Аккаунт</button>
                    </a>
                    <SideBar />
                </div>
            </Header>
            <SearchForm />
            <div className='MoviesCardList__container'>
                <div>
                    <div className='MoviesCard__Container'>
                        <div className='MoviesCard__headingContainer'>
                            <p className='MoviesCard__name'>В погоне за Бенкси</p>
                            <p className='MoviesCard__time'>27 минут</p>
                        </div>
                        <img className='MoviesCard__imageMovie' alt='изображение из фильма' src={imageMovie} />
                        <button className='MoviesCard__saveMovie Moviescard__deleteMovie'>
                            <img src={imgDelete} alt='значок крестика' />
                        </button>
                    </div>
                </div>
                <div>
                    <div className='MoviesCard__Container'>
                        <div className='MoviesCard__headingContainer'>
                            <p className='MoviesCard__name'>В погоне за Бенкси</p>
                            <p className='MoviesCard__time'>27 минут</p>
                        </div>
                        <img className='MoviesCard__imageMovie' alt='изображение из фильма' src={imageMovie} />
                        <button className='MoviesCard__saveMovie Moviescard__deleteMovie'>
                            <img src={imgDelete} alt='значок крестика' />
                        </button>
                    </div>
                </div>
                <div>
                    <div className='MoviesCard__Container'>
                        <div className='MoviesCard__headingContainer'>
                            <p className='MoviesCard__name'>В погоне за Бенкси</p>
                            <p className='MoviesCard__time'>27 минут</p>
                        </div>
                        <img className='MoviesCard__imageMovie' alt='изображение из фильма' src={imageMovie} />
                        <button className='MoviesCard__saveMovie Moviescard__deleteMovie'>
                            <img src={imgDelete} alt='значок крестика' />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}