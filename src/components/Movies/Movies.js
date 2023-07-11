import { useState, useEffect } from "react"

import Header from "../Header/Header"
import logo from "../../images/logo.png"
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
import { filterMovies } from "../../utils/Filter"
import "../Header/Header.css"
import SideBar from "../SideBar/SideBar"
import moviesApi from "../../utils/MoviesApi"
import mainApi from "../../utils/MainApi"

export default function Movies({ }) {
    
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
            <SearchForm 
            />
            <MoviesCardList
            />
            <Footer />
        </>
    )
}