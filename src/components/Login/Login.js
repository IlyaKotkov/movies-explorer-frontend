import "./Login.css"
import logo from "../../images/logo.png"

export default function Login() {
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
                <div className="Authorize__inputContainer">
                    <p className="Authorize__Text">E-mail</p>
                    <input type="email" required className="Authorize__Input" />
                    <p className="Authorize__Text">Password</p>
                    <input type="password" required className="Authorize__Input Authorize__InputPassword" />
                </div>
                <a className="Authorize__ButtonLink" href="/movies">
                    <button className="Authorize__Button">Войти</button>
                </a>
                <p className="Authorize__unauthorizeText">Еще не зарегестрированы?
                    <a className="Authorize__link" href="/signup"> Регистрация</a>
                </p>
            </div>
        </section>
    )
}