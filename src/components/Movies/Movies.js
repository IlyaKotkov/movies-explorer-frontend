import { Link } from "react-router-dom"
import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
import "../Header/Header.css"
import SideBar from "../SideBar/SideBar"
import moviesApi from "../../utils/MoviesApi"
import mainApi from "../../utils/MainApi"
import { useState, useEffect } from "react"
import searchFilter from "../../utils/Filter"

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const savedMovies = localStorage.getItem('savedMovies');
        if (!savedMovies) {
            setIsLoading(true);
            mainApi
                .getSavedMovies()
                .then((data) => {
                    if (data.length > 0) {
                        localStorage.setItem('savedMovies', JSON.stringify(data));
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }, []);

    const filter = (query, shorts) => {
        const storedMovies = JSON.parse(localStorage.getItem('movies'));
        const filtered = searchFilter(storedMovies, query, shorts);
        if (filtered.length === 0) {
            console.log("ничего не найдено")
        }
        setMovies(filtered);
        setIsLoading(false);
    };

    const handleSearch = (query, shorts) => {
        setIsLoading(true);
        const storedMovies = JSON.parse(localStorage.getItem('movies'));
        if (!storedMovies) {
            moviesApi
                .getInitialMovies()
                .then((films) => {
                    localStorage.setItem('movies', JSON.stringify(films));
                    filter(query, shorts);
                })
                .catch((err) => {
                    console.log(err)
                });
        } else {
            filter(query, shorts);
        }
    };

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
            <SearchForm
                handleSearch={handleSearch}
            />
            {isLoading ? (
                <Preloader />
            ) : (
                <MoviesCardList
                    movies={movies}
                    error={error}
                />
            )}
            <Footer />
        </>
    )
}