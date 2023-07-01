import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"

export default function Main() {
    return (
        <>
        <Header>
            <div className="Header__Container">
                <a href="/signup">
                    <button className='Header__mainRegisterButton'>Регистрация</button>
                </a>
                <a href="/signin">
                    <button className='Header__mainAuthorizeButton'>Войти</button>
                </a>
            </div>
        </Header>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
        </>
    )
}