import logo from "../../images/logo.png"

export default function Register() {
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
                    <p className="Authorize__Text">Имя</p>
                    <input type="text" className="Authorize__Input" />
                    <p className="Authorize__Text">E-mail</p>
                    <input type="text" className="Authorize__Input" />
                    <p className="Authorize__Text">Password</p>
                    <input type="password" className="Authorize__Input" />
                </div>
                <a href="/signin">
                    <button className="Authorize__Button">Зарегестрироваться</button>
                </a>
                <p className="Authorize__unauthorizeText">Уже зарегестрированы?
                    <a className="Authorize__link" href="/signin"> Войти</a>
                </p>
            </div>
        </section>
    )
}
