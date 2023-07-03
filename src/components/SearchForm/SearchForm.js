import './SearchForm.css'

export default function SearchForm() {
    return (
        <section className="SearchForm">
            <div className="SearchForm__container">
                <div className='SearchForm__inputContainer'>
                <input type="text" placeholder='Фильм' className="SearchForm__input" />
                <button className="SearchForm__searchButton">&#128269;</button> 
                </div>
                <label className="SearchForm__checkBoxContainer" for="checkbox">
                    <input className="SearchForm__checkBox" type="checkbox" id='checkbox'/>
                    <span className="SearchForm__typeMovie">Короткометражки</span>
                </label>
            </div>
        </section>
    )
}