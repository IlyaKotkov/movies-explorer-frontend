import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/logo.png"
import * as AuthApi from '../../utils/AuthApi';
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {

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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    setEmail(e.target.value)
    const filter = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
    if (!filter.test(String(e.target.value).toLowerCase())) {
      setEmailError("некорректный Email")
    } else {
      setEmailError("")
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
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return
    }
    AuthApi.authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          setFormValue({ email: '', password: '' });
          onLogin(formValue.email);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err.message)
      });
  }

  return (
    <section className="Authorize">
      <div className="Authorize__Container">
        <Link className="Authorize__mainLink" href="/">
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
            onBlur={e => blurHandler(e)}
            onChange={handleChange}
            type="email"
            name="email"
            className="Authorize__Input"
            value={formValue.email}
            required
          />
          {(emailDirty && emailError) && <div className="authorizeError">{emailError}</div>}
          <p className="Authorize__Text">Password</p>
          <input
            onBlur={e => blurHandler(e)}
            type="password"
            name="password"
            className="Authorize__Input Authorize__InputPassword"
            value={formValue.password}
            onChange={handleChange}
            required
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