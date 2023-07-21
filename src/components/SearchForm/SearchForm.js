import './SearchForm.css'
import findImg from '../../images/find.png'
import { useState } from 'react';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export default function SearchForm({ handleSearch }) {

    const [inputValue, setInputValue] = useState('');
    const [shorts, setShorts] = useState(false);
    const [error, setError] = useState(false);
    const { pathname } = useLocation();
    const [placeholderContent, setPlaceholderContent] = useState('Название');
    const query = localStorage.getItem("query")

    const handeleInput = (evt) => {
        setInputValue(evt.target.value);
    };

    const handleCheckbox = () => {
        setShorts(!shorts);
        handleSearch(inputValue, !shorts);
        if (pathname === '/movies') {
            localStorage.setItem('shorts', !shorts);
        } 
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!inputValue) {
            setError(true);
            evt.target.elements['search-query'].focus();
            return;
        }
        setError(false);
        setPlaceholderContent(query);
        if (pathname === '/movies') {
            localStorage.setItem('query', inputValue);
        } 
        handleSearch(inputValue, shorts);
    };

    useEffect(() => {
        if (pathname === '/movies') {
            const savedInputValue = localStorage.getItem('query');
            const savedShorts = JSON.parse(localStorage.getItem('shorts'));
            if (savedInputValue) {
                setInputValue(savedInputValue);
            }
            if (savedShorts) {
                setShorts(savedShorts);
            }
            if (savedInputValue || savedShorts === true) {
                handleSearch(savedInputValue, savedShorts);
            }
        }
    }, []);

    return (
        <section className="SearchForm">
            <div className="SearchForm__container">
                <form noValidate onSubmit={handleSubmit} className='SearchForm__inputContainer'>
                    <input
                        required
                        pattern='^[а-яА-ЯёЁa-zA-Z0-9]+$'
                        type="text"
                        placeholder={placeholderContent}
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

                    {error ? (
                        <span className="searchForm__inputError">
                            Введите ключевое слово
                        </span>
                    ) : (
                        <span className="searchForm__inputError searchForm__inputError_hidden">
                            Введите ключевое слово
                        </span>
                    )}
                </form>
                <label className="SearchForm__checkBoxContainer" for="checkbox">
                    <input onChange={handleCheckbox} checked={shorts} value={shorts} className="SearchForm__checkBox" type="checkbox" id='checkbox' />
                    <span className="SearchForm__typeMovie">Короткометражки</span>
                </label>
            </div>
        </section>
    )
}