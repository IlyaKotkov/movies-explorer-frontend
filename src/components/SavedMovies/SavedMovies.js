import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import imageMovie from "../../images/pic__COLOR_pic.png"
import imgDelete from "../../images/d6.png"
import SideBar from "../SideBar/SideBar"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { useState, useEffect } from "react"
import searchFilter from "../../utils/Filter"
import mainApi from "../../utils/MainApi"
import Preloader from "../Preloader/Preloader"
import { Link } from "react-router-dom"

export default function SavedMovies(props) {

    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem('savedMovies')) || []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (query, isShort) => {
        setIsLoading(true);
        setError('');
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        const filtered = searchFilter(savedMovies, query, isShort);
        if (filtered.length === 0) {
            setError('Ничего не найдено');
        }
        setMovies(filtered);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        mainApi
            .getSavedMovies()
            .then((savedMovies) => {
                const user = localStorage.getItem('userId');
                const userMovies = savedMovies.filter((film) => film.owner === user);
                localStorage.setItem('savedMovies', JSON.stringify(userMovies));
                setIsLoading(false);
                if (savedMovies.length === 0) {
                    setError('Вы еще ничего не добавили в избранное');
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);


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
            <SearchForm handleSearch={handleSearch} />
            {isLoading ? (
                <Preloader />
            ) : (
                <MoviesCardList movies={movies} error={error} />
            )}
            <Footer />
        </>
    )
}