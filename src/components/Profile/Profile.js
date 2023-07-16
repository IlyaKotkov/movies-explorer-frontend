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

    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
            Promise.all([
                mainApi.getInformation(),
            ])
                .then((values) => {
                    setUser(values[0])
                })
                .catch(err => console.log(err))   
    }, []);

    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [nameError, emailError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        const filterName = /[а-яА-ЯёЁa-zA-Z0-9]+$/
        if (!filterName.test(String(e.target.value).toLowerCase())) {
            setNameError("некорректное имя")
        } else {
            setNameError('')
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        const filter = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
        if (!filter.test(String(e.target.value).toLowerCase())) {
            setEmailError("некорректный Email")
        } else {
            setEmailError("")
        }
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
                            name="name"
                            required
                            onChange={handleNameChange}
                            onBlur={e => blurHandler(e)}
                            className="Profile__infoUserInput"
                        />
                    </div>
                    {(nameDirty && nameError) && <div className="authorizeError">{nameError}</div>}
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">E-mail</p>
                        <input
                            onBlur={e => blurHandler(e)}
                            value={email}
                            name="email"
                            required
                            onChange={handleEmailChange}
                            className="Profile__infoUserInput"
                        />
                    </div>
                    {(emailDirty && emailError) && <div className="authorizeError">{emailError}</div>}
                    <button type="submit" disabled={!formValid}
                    className={
                        formValid
                          ? "Profile__editButton"
                          : "Profile__editButtonNoActive"
                      }
                    >Редактировать</button>
                    <button onClick={signOut} className="Profile__exitButton">Выйти из аккаунта</button>
                </form>
            </section>
        </>
    )
}