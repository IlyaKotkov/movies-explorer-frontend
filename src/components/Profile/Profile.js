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

export default function Profile({ onExit, handleShowInfoMessage }) {

    const currentUser = useContext(CurrentUserContext);
    const navigate = useNavigate()
    const [user, setUser] = useState({
        "name": '',
        "email": ''
    })
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isEditData, setIsEditData] = useState(false);
    const [isActiveEdit, setIsActiveEdit] = useState(false);
    const [errorEdit, setErrorEdit] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

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
        setName(currentUser.name)
        setEmail(currentUser.email)
    }, [currentUser.name, currentUser.email])

    useEffect(() => {
        if (currentUser.name !== name || currentUser.email !== email) {
          setIsEditData(false);
        } else {
          setIsActiveEdit(false);
        }
      }, [currentUser, name, email]);

    useEffect(() => {
        if (nameError || emailError) {
            setIsActiveEdit(false)
        } else {
            setIsActiveEdit(true)
        }

    }, [nameError, emailError])

    const handelEditProfile = ({ name, email }) => {
        mainApi
            .editUserInfo({ name, email })
            .then((data) => {
                setIsEditData(true);
                setErrorEdit(false);
            })
            .catch((res) => {
                handleShowInfoMessage({
                    text: (`${res.message}`),
                    isSuccess: true
                  })
                setErrorEdit(true);
            })
            .finally(() => {
                setErrorEdit(false);
            });
    };

    const handleNameChange = (e) => {
        setIsActiveEdit(true);
        setIsEditData(false);
        setName(e.target.value);
        const input = e.target;
        setName(input.value);
        setIsValidName(input.validity.valid);
        if (!isValidName) {
            setNameError(input.validationMessage);
        } else {
            setNameError('');
        }
    }

    const handleEmailChange = (e) => {
        setIsActiveEdit(true);
        setEmail(e.target.value);
        const input = e.target;
        setEmail(input.value);
        setIsValidEmail(input.validity.valid);
        if (!isValidEmail) {
            setEmailError(input.validationMessage);
        } else {
            setEmailError('');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name !== currentUser.name || email !== currentUser.email) {
            setIsActiveEdit(true);
            handelEditProfile({ name, email });
            setIsActiveEdit(false);
            handleShowInfoMessage({
                text: "Данные изменены!",
                isSuccess: true
              })
        } else { 
            setIsActiveEdit(false);
        }
    }

    function signOut() {
        localStorage.clear();
        navigate('/', { replace: true });
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
                    <h1 className="Profile__heading">{`Привет, ${currentUser.name}!`}</h1>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">Имя</p>
                        <input
                            value={name || ''}
                            name="name"
                            id="name"
                            type="name"
                            required
                            onChange={handleNameChange}
                            className="Profile__infoUserInput"
                        />
                    </div>
                    <span className="authorizeError">
                        {errorName}
                    </span>
                    <div className="Profile__userInfoContainer">
                        <p className="Profile__infoUser">E-mail</p>
                        <input
                            type="email"
                            value={email || ''}
                            name="email"
                            required
                            onChange={handleEmailChange}
                            className="Profile__infoUserInput"
                        />
                    </div>
                    <span className="authorizeError">
                        {errorEmail}
                    </span>
                    <button type="submit" disabled={!isActiveEdit}
                        className={
                            isActiveEdit
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