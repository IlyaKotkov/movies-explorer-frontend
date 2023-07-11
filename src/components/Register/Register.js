import logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";

import * as AuthApi from '../../utils/AuthApi'
import { useState } from "react";

export default function Register() {

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formValue.password) {
            const { name, email, password } = formValue;
            AuthApi.register(name, email, password).then(() => {
                navigate('/signin', { replace: true })
            })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    return (
        <section className="Authorize">
            <div className="Authorize__Container">
                <a href="/">
                    <img
                        className="Authorize__Logo"
                        src={logo}
                        alt="Логотип сайта movies-explorer"
                    />
                </a>
                <h1 className="Authorize__Heaing">Рады видеть!</h1>
                <form className="Authorize__inputContainer" onSubmit={handleSubmit}>
                    <p className="Authorize__Text">Имя</p>
                    <input
                        type="text"
                        name="name"
                        className="Authorize__Input"
                        value={formValue.name}
                        onChange={handleChange}
                        required
                    />
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
                    <button type="submit" className="Authorize__ButtonLink" href="/signin">Зарегестрироваться</button>
                </form>


                <p className="Authorize__unauthorizeText">Уже зарегестрированы?
                    <a className="Authorize__link" href="/signin"> Войти</a>
                </p>
            </div>
        </section>
    )
}
