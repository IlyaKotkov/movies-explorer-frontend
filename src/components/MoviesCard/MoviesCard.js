import './MoviesCard.css'
import imageMovie from '../../images/pic__COLOR_pic.png'
import imageSaved from '../../images/save6d.png'

export default function MoviesCard({movie}) {
    return (
        <div className='MoviesCardList__container'>
            <div className='MoviesCard__Container'>
                <div className='MoviesCard__headingContainer'>
                    <h3 className='MoviesCard__name'>{movie.nameRU}</h3>
                    <p className='MoviesCard__time'>{movie.duration}</p>
                </div>
                <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img className='MoviesCard__imageMovie' src={movie.image} alt={movie.nameRU}  />
                </a>
                <button className='MoviesCard__saveMovie MoviesCard__saveMovieSaved'>
                    <img className='MoviesCard__imgSave'  alt='значок галочки' />
                </button>
            </div>

        </div>
    )
}