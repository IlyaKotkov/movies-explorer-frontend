import './SearchForm.css'
import findImg from '../../images/find.png'

export default function SearchForm() {
    return (
        <section className="SearchForm">
            <div className="SearchForm__container">
                <form className='SearchForm__inputContainer'>
                <input required pattern='^[а-яА-ЯёЁa-zA-Z0-9]+$' type="text" placeholder='Фильм' className="SearchForm__input" />
                <button className="SearchForm__searchButton">
                        <img className='SearchForm__searchImg' src={findImg} alt='значок поиска'/>
                    </button> 
                </form>
                <label className="SearchForm__checkBoxContainer" for="checkbox">
                    <input className="SearchForm__checkBox" type="checkbox" id='checkbox'/>
                    <span className="SearchForm__typeMovie">Короткометражки</span>
                </label>
            </div>
        </section>
    )
}