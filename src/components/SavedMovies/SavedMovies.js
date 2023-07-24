import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import SideBar from "../SideBar/SideBar"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { useState, useEffect } from "react"
import searchFilter from "../../utils/Filter"
import mainApi from "../../utils/MainApi"
import Preloader from "../Preloader/Preloader"
import { Link } from "react-router-dom"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useContext } from "react"

export default function SavedMovies(props) {
    const currentUser = useContext(CurrentUserContext)
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem('savedMovies')) || []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const token = localStorage.getItem("token");

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
        mainApi
            .getSavedMovies(token)
            .then((savedMovies) => {
                const userMovies = savedMovies.filter((film) => film.owner === currentUser._id);
                localStorage.setItem('savedMovies', JSON.stringify(userMovies));
                setIsLoading(false);
                if (savedMovies.length === 0) {
                    setError();
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }, [currentUser._id, token]);


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
                <MoviesCardList  movies={movies} error={error}/>
            )}
            <Footer />
        </>
    )
}