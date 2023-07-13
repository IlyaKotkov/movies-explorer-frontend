import './MoviesCard.css'
import { correctMinute } from '../../utils/Correct'
import { useState } from 'react';
import mainApi from '../../utils/MainApi';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export default function MoviesCard({ movie }) {

  const [isSaved, setIsSaved] = useState(false);
  const [savedId, setSavedId] = useState('');
  const location = useLocation()

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
      savedMovies.forEach((savedMovie) => {
        if (savedMovie.movieId === movie.id || savedMovie._id === movie._id) {
          setIsSaved(true);
          setSavedId(savedMovie._id);
        }
      });
    }
  }, [movie._id, movie.id]);

  const handleMovieSaved = (evt) => {
    if (!isSaved) {
      const newMovie = {};
      const { image, id } = movie;

      Object.assign(newMovie, movie);
      delete newMovie.id;
      delete newMovie.created_at;
      delete newMovie.updated_at;

      Object.entries(newMovie).forEach((key) => {
        if (!key[1]) {
          newMovie[key[0]] = '...';
        }
      });

      mainApi
        .saveMovie({
          ...newMovie,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
          movieId: id,
        })
        .then((savedMovie) => {
          setIsSaved(true);
          setSavedId(savedMovie._id);
          let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          if (!savedMovies) {
            savedMovies = [];
          }
          savedMovies.push(savedMovie);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch((err) => {
          if (err.status === 400) {
            console.log('Что-то пошло не так...');
          } else {
            console.log('Нет соединения');
          }
        });
    } else {
      mainApi
        .deleteMovie(savedId)
        .then(() => {
          setIsSaved(false);
          const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          let index = 0;
          for (let i = 0; i < savedMovies.length; i += 1) {
            const film = savedMovies[i];
            if (film._id === movie._id) {
              index = i;
            }
          }
          savedMovies.splice(index, 1);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          if (location.pathname === '/saved-movies') {
            evt.target.closest('.MoviesCard__Container').remove();
          }
        })
        .catch((err) => console.log('error:', err));
    }
  };

  return (
    <div className='MoviesCard__Container'>
      <div className='MoviesCard__headingContainer'>
        <h3 className='MoviesCard__name'>{movie.nameRU}</h3>
        <p className='MoviesCard__time'>{correctMinute(movie.duration)}</p>
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='MoviesCard__imageMovie' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
      </a>
      <button onClick={handleMovieSaved} className={
        isSaved
          ? 'MoviesCard__saveMovie'
          : 'MoviesCard__notSaved'
      }>

      </button>
    </div>
  )
}