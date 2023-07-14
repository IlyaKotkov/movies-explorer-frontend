import Header from "../Header/Header"
import logo from "../../images/logo.png"
import "./Profile.css"
import SideBar from "../SideBar/SideBar"
import { Link } from "react-router-dom"
import mainApi from "../../utils/MainApi"

import { useContext, useState } from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { useNavigate } from "react-router"
import { useEffect } from "react"

export default function Profile({ emailUser, onExit }) {

    const currentUser = useContext(CurrentUserContext)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [user, setUser] = useState({
        "name": '',
        "email": ''
    })

    useEffect(() => {
            Promise.all([
                mainApi.getInformation(),
            ])
                .then((values) => {
                    setUser(values[0])
                })
                .catch(err => console.log(err))   
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        setName(currentUser.name)
        setEmail(currentUser.email)
    }, [currentUser])

    const handleUpdateUser = (data) => {
        mainApi.editUserInfo(data).then(updateUser => {
            setUser(updateUser)
        })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdateUser({
            name,
            email,
        });
    }

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
                <form
                    onSubmit={handleSubmit}
                    id="profileForm"
                    noValidate
                    className="Profile__container">
                    <h1 className="Profile__heading">Привет, {currentUser.name}!</h1>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">Имя</p>
                        <input
                            value={name}
                            required
                            onChange={handleNameChange}
                            className="Profile__infoUserInput"
                        ></input>
                    </div>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">E-mail</p>
                        <input
                            value={email}
                            required
                            onChange={handleEmailChange}
                            className="Profile__infoUserInput"
                        ></input>
                    </div>
                    <button type="submit" className="Profile__editButton">Редактировать</button>
                    <button onClick={signOut} className="Profile__exitButton">Выйти из аккаунта</button>
                </form>
            </section>
        </>
    )
}