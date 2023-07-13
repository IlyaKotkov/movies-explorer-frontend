import './MoviesCard.css'
import imageMovie from '../../images/pic__COLOR_pic.png'
import imageSaved from '../../images/save6d.png'

export default function MoviesCard({movie}) {

    const correctMinute = (number) => {
        if (number > 10 && number < 20) {
          return `${number} минут`;
        } else if (number % 10 === 1) {
          return `${number} минута`;
        } else if (number % 10 > 1 && number % 10 < 5) {
          return `${number} минуты`;
        } else {
          return `${number} минут`;
        }
      };

    return (
        <div className='MoviesCardList__container'>
            <div className='MoviesCard__Container'>
                <div className='MoviesCard__headingContainer'>
                    <h3 className='MoviesCard__name'>{movie.nameRU}</h3>
                    <p className='MoviesCard__time'>{correctMinute (movie.duration)}</p>
                </div>
                <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img className='MoviesCard__imageMovie' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU}  />
                </a>
                <button className='MoviesCard__saveMovie'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d="M1 3.75L3.81905 6L9 1.5" stroke="white" stroke-width="1.5"/>
                        </svg>
                </button>
            </div>

        </div>
    )
}