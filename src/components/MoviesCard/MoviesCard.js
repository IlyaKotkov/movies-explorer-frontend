import './MoviesCard.css'
import { correctMinute } from '../../utils/Correct'
import { useState } from 'react';

export default function MoviesCard({ movie }) {

  const [isSaved, setIsSaved] = useState(false);

  return (
      <div className='MoviesCard__Container'>
        <div className='MoviesCard__headingContainer'>
          <h3 className='MoviesCard__name'>{movie.nameRU}</h3>
          <p className='MoviesCard__time'>{correctMinute(movie.duration)}</p>
        </div>
        <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
          <img className='MoviesCard__imageMovie' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </a>
        <button className={
          isSaved
            ? 'MoviesCard__saveMovie'
            : 'MoviesCard__notSaved'
        }></button>
      </div>
  )
}