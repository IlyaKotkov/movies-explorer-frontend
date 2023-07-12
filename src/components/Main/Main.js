import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
            <Header>
                <div className="Header__MainContainer">
                    <img
                        className="Header__Logo"
                        src={logo}
                        alt="Логотип сайта movies-explorer"
                    />
                    <div className="Header__Container">
                        
                        <Link to="/signup" className='Header__mainRegisterButton'>Регистрация</Link>
                       
                        
                        <Link to="/signin" className='Header__mainAuthorizeButton'>Войти</Link>
                        
                    </div>
                </div>
            </Header>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
            </main>
        </>
    )
}