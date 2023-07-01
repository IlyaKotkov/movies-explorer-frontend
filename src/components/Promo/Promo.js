import imagePromo from "../../images/text__COLOR_landing-logo.png"
import './Promo.css'

export default function Promo() {
    return (

        <section className="Promo">
            <div className="Promo__Container">
                <h1 className="Promo__Text">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="Promo__Image" src={imagePromo} alt="Рисунок-баннер проекта пересекающиеся круги" />
            </div>
        </section>

    )
}