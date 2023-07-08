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
                <form className="Authorize__inputContainer">
                    <p className="Authorize__Text">Имя</p>
                    <input type="text" required className="Authorize__Input" />
                    <p className="Authorize__Text">E-mail</p>
                    <input type="email" required className="Authorize__Input" />
                    <p className="Authorize__Text">Password</p>
                    <input type="password" required className="Authorize__Input Authorize__InputPassword" />
                </form>
                
                <a className="Authorize__ButtonLink" href="/signin">Зарегестрироваться</a>
                
                <p className="Authorize__unauthorizeText">Уже зарегестрированы?
                    <a className="Authorize__link" href="/signin"> Войти</a>
                </p>
            </div>
        </section>
    )
}
