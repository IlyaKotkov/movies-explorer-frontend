import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useState } from 'react'

export default function MoviesCardList({ movies, error }) {

    const [maxMovies, setMaxMovies] = useState(3);
    const showMoreMovies = () => {
        setMaxMovies(maxMovies);
    };

    return (
        <section className="MoviesCardList">
            <div className='MoviesCardList__container'>
            {movies.map((movie, index) => {
                if (index < maxMovies) {
                    return (
                        <MoviesCard key={movie.id || movie.movieId} movie={movie} />
                    )
                }
                return null
            })}
            </div>
            <div className='MoviesCardList__downloadMore'>
            {movies.length > maxMovies && (
                 <button onClick={showMoreMovies} className='MoviesCardList__downloadMoreButton'>Ещё</button>
            )}
            </div>
        </section>
    )
}