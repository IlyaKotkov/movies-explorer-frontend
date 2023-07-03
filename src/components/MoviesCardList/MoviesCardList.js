import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {
    return (

        <section className="MoviesCardList">
            <div className='MoviesCardList__container'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className='MoviesCardList__downloadMore'>
                <button className='MoviesCardList__downloadMoreButton'>Ещё</button>
            </div>
        </section>

    )
}