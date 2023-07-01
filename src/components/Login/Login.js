import "./Login.css"
import logo from "../../images/logo.png"

export default function Login() {
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
                <div className="Authorize__inputContainer">
                    <p className="Authorize__Text">E-mail</p>
                    <input type="text" className="Authorize__Input" />
                    <p className="Authorize__Text">Password</p>
                    <input type="password" className="Authorize__InputPassword" />
                </div>
                <a href="/movies">
                    <button className="Authorize__Button">Войти</button>
                </a>
                <p className="Authorize__unauthorizeText">Еще не зарегестрированы?
                    <a className="Authorize__linkToRegister" href="/signup"> Зарегистрироваться</a>
                </p>
            </div>
        </section>
    )
}