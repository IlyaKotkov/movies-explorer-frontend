import './MoviesCard.css'
import imageMovie from '../../images/pic__COLOR_pic.png'

export default function MoviesCard(props) {
    return (

        <div>
            <div className='MoviesCard__Container'>
                <div className='MoviesCard__headingContainer'>
                    <p className='MoviesCard__name'>В погоне за Бенкси</p>
                    <p className='MoviesCard__time'>27 минут</p>
                </div>
                <img className='MoviesCard__imageMovie' alt='изображение из фильма' src={imageMovie} />
                <button className='MoviesCard__saveMovie MoviesCard__saveMovieSaved'>Сохранить</button>
            </div>

            <div className='MoviesCard__Container'>
                <div className='MoviesCard__headingContainer'>
                    <p className='MoviesCard__name'>В погоне за Бенкси</p>
                    <p className='MoviesCard__time'>27 минут</p>
                </div>
                <img className='MoviesCard__imageMovie' alt='изображение из фильма' src={imageMovie} />
                <button className='MoviesCard__saveMovie MoviesCard__saveMovie-saved'>&#10004;</button>
            </div>
        </div>
    )
}