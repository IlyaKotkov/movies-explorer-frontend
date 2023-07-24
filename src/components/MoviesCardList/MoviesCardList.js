import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useState } from 'react'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

import {
  MAX_MOVIES,
  MAX_MOVIES_1280,
  MAX_MOVIES_768,
  MAX_MOVIES_STEP,
  MAX_MOVIES_STEP_1280,
} from '../../utils/constants/constants'

export default function MoviesCardList({ movies, error }) {

    const [maxMovies, setMaxMovies] = useState(0);
    const location = useLocation()
    const [step, setStep] = useState(0);

    const showMoreMovies = () => {
        setMaxMovies(maxMovies + step);
    };

    const setMoviesRules = () => {
        const width = window.innerWidth;
        if (location.pathname === '/movies') {
          setMaxMovies(movies.length);
        }
        if (width <= 480) {
          setMaxMovies(MAX_MOVIES);
          setStep(MAX_MOVIES_STEP,);
        } else if (width <= 768) {
          setMaxMovies(MAX_MOVIES_768);
          setStep(MAX_MOVIES_STEP);
        } else if (width <= 1280) {
          setMaxMovies(MAX_MOVIES_1280);
          setStep(MAX_MOVIES_STEP_1280);
        } else {
          setMaxMovies(12);
          setStep(3);
        }
      };

      useEffect(() => {
        setMoviesRules();
        window.addEventListener('resize', () => {
          setTimeout(() => {
            setMoviesRules();
          }, 500);
        });
      }, []);

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