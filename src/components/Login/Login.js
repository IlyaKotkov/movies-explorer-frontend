import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png"
import * as AuthApi from '../../utils/AuthApi';

export default function Login({ onLogin }) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
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
        console.log(err)
      });
  }

  return (
    <section className="Authorize">
      <div className="Authorize__Container">
        <a className="Authorize__mainLink" href="/">
          <img
            className="Authorize__Logo"
            src={logo}
            alt="Логотип сайта movies-explorer"
          />
        </a>
        <h1 className="Authorize__Heaing">Рады видеть!</h1>
        <form className="Authorize__inputContainer" onSubmit={handleSubmit}>
          <p className="Authorize__Text">E-mail</p>
          <input
            type="email"
            name="email"
            className="Authorize__Input"
            value={formValue.email}
            onChange={handleChange}
            required
          />
          <p className="Authorize__Text">Password</p>
          <input
            type="password"
            name="password"
            className="Authorize__Input Authorize__InputPassword"
            value={formValue.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="Authorize__ButtonLink">Войти</button>
        </form>

        <p className="Authorize__unauthorizeText">Еще не зарегестрированы?
          <a className="Authorize__link" href="/signup"> Регистрация</a>
        </p>
      </div>
    </section>
  )
}