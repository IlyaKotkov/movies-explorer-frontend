import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {
    return (

        <section className="MoviesCardList">      
                <MoviesCard />
            <div className='MoviesCardList__downloadMore'>
                <button className='MoviesCardList__downloadMoreButton'>Ещё</button>
            </div>
        </section>

    )
}