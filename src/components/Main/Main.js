import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"

export default function Main() {
    return (
        <>
        <Header>
            <div className="headerContainer">
                <button className='mainRegisterButton'>Регистрация</button>
                <button className='mainAuthorizeButton'>Войти</button>
            </div>
        </Header>
        <Promo />
        <AboutProject />
        <Techs />
        </>
    )
}