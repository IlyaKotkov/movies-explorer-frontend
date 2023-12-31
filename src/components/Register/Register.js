import logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";

import * as AuthApi from '../../utils/AuthApi'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Register({onLogin, handleShowInfoMessage}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [nameDirty, setNameDirty] = useState(false)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('Имя не может быть пустым')

    const [formValid, setFormValid] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [emailCurrentDirty, setEmailCurrentDirty] = useState(false)
    const [emailCurrentError, setEmailCurrentError] = useState(false)

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [nameError, emailError, passwordError])

    function handleNameChange(e) {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });

        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
        }

        setName(e.target.value)
        const filterName = /[а-яА-ЯёЁa-zA-Z0-9]+$/
        if (!filterName.test(String(e.target.value).toLowerCase())) {
            setNameError("некорректное имя")
        } else {
            setNameError('')
        }
    }

    function handleEmailChange(e) {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });

        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
        }

        setEmail(e.target.value)
        const filter = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
        if (!filter.test(String(e.target.value).toLowerCase())) {
            setEmailError("некорректный Email")
        } else {
            setEmailError("")
        }
    }

    function handlePasswordChange(e) {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });

        switch (e.target.name) {
            case 'password':
                setPasswordDirty(true)
                break
        }

        setPassword(e.target.value)
        if (8 > e.target.value.length) {
            setPasswordError("пароль должен быть не менее 8 символов")
            if (!e.target.value) {
                setPasswordError("пароль должен быть не менее 8 символов")
            }
        } else {
            setPasswordError('')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formValue.password) {
            const { name, email, password } = formValue;
            AuthApi.register(name, email, password).then(() => {
                onLogin({email, password})
            })
                .catch((err) => {
                    handleShowInfoMessage({
                        text: (`Что-то пошло не так! ${err}`),
                        isSuccess: false
                      })
                    console.log(err)
                });
        }
    }

    return (
        <section className="Authorize">
            <div className="Authorize__Container">
                <Link to="/">
                    <img
                        className="Authorize__Logo"
                        src={logo}
                        alt="Логотип сайта movies-explorer"
                    />
                </Link>
                <h1 className="Authorize__Heaing">Рады видеть!</h1>
                <form noValidate className="Authorize__inputContainer" onSubmit={handleSubmit}>
                    <p className="Authorize__Text">Имя</p>
                    <input
                        type="text"
                        name="name"
                        className="Authorize__Input"
                        value={formValue.name}
                        onChange={handleNameChange}
                        required
                    />
                    {(nameDirty && nameError) && <div className="authorizeError">{nameError}</div>}
                    <p className="Authorize__Text">E-mail</p>
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        className="Authorize__Input"
                        value={formValue.email}
                        required
                    />
                    {(emailDirty && emailError) && <div className="authorizeError">{emailError}</div>}
                    <p className="Authorize__Text">Password</p>
                    <input
                        type="password"
                        name="password"
                        className="Authorize__Input Authorize__InputPassword"
                        value={formValue.password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {(passwordDirty && [passwordError]) && <div className="authorizeError">{passwordError}</div>}
                    {(emailCurrentDirty && [emailCurrentError]) && <div className="authorizeError">{emailCurrentError}</div>}
                    <button disabled={!formValid} type="submit" className={
                        formValid
                            ? "Authorize__ButtonLink"
                            : "Authorize__ButtonLinkNoActive"
                    }
                        href="/signin"

                    >Зарегестрироваться</button>
                </form>


                <p className="Authorize__unauthorizeText">Уже зарегестрированы?
                    <Link className="Authorize__link" to="/signin"> Войти</Link>
                </p>
            </div>
        </section >
    )
}
