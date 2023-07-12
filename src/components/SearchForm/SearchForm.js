import './SearchForm.css'
import findImg from '../../images/find.png'
import { useState } from 'react';
import { useLocation } from 'react-router';

export default function SearchForm({ handleSearch }) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const { pathname } = useLocation();

    const handeleInput = (evt) => {
        setInputValue(evt.target.value);
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!inputValue) {
          setError(true);
          evt.target.elements['search-query'].focus();
          return;
        }
        setError(false);
        if (pathname === '/movies') {
          localStorage.setItem('query', inputValue);
        }
        handleSearch(inputValue);
      };

    return (
        <section className="SearchForm">
            <div className="SearchForm__container">
                <form onSubmit={handleSubmit} className='SearchForm__inputContainer'>
                    <input
                        required
                        pattern='^[а-яА-ЯёЁa-zA-Z0-9]+$'
                        type="text"
                        placeholder='Фильм'
                        className="SearchForm__input"
                        id="search-query"
                        name="search-query"
                        onChange={handeleInput}
                    />
                    <button 
                    type="submit" 
                    className="SearchForm__searchButton"
                    >
                        <img className='SearchForm__searchImg' src={findImg} alt='значок поиска' />
                    </button>
                </form>
                <label className="SearchForm__checkBoxContainer" for="checkbox">
                    <input className="SearchForm__checkBox" type="checkbox" id='checkbox' />
                    <span className="SearchForm__typeMovie">Короткометражки</span>
                </label>
            </div>
        </section>
    )
}