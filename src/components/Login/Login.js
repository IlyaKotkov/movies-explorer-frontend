import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/logo.png"
import * as AuthApi from '../../utils/AuthApi';
import { Link } from "react-router-dom";

export default function Login({onLogin}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [emailError, passwordError])

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
    if (e.target.value.length < 8) {
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
        const { email, password } = formValue;
        onLogin({email, password})
    } else {
      console.error()
    }
  }

  return (
    <section className="Authorize">
      <div className="Authorize__Container">
        <Link className="Authorize__mainLink" to="/">
          <img
            className="Authorize__Logo"
            src={logo}
            alt="Логотип сайта movies-explorer"
          />
        </Link >
        <h1 className="Authorize__Heaing">Рады видеть!</h1>
        <form noValidate className="Authorize__inputContainer" onSubmit={handleSubmit}>
          <p className="Authorize__Text">E-mail</p>
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            className="Authorize__Input"
            value={formValue.email}
            required
            autocomplete="email"
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
            autocomplete="off"
          />
          {(passwordDirty && [passwordError]) && <div className="authorizeError">{passwordError}</div>}
          <button disabled={!formValid} type="submit" className={
            formValid
              ? "Authorize__ButtonLink"
              : "Authorize__ButtonLinkNoActive"
          }>Войти</button>
        </form>

        <p className="Authorize__unauthorizeText">Еще не зарегестрированы?
          <Link className="Authorize__link" to="/signup"> Регистрация</Link>
        </p>
      </div>
    </section>
  )
}