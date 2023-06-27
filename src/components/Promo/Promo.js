import imagePromo from "../../images/text__COLOR_landing-logo.png"
import './Promo.css'

export default function Promo() {
    return (
        
        <section className="Promo">
            <h1 className="promoText">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promoImage" src={imagePromo} alt="Рисунок-баннер проекта пересекающиеся круги"/>
        </section>
        
    )
}