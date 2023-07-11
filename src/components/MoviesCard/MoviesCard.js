import './MoviesCard.css'
import imageMovie from '../../images/pic__COLOR_pic.png'
import imageSaved from '../../images/save6d.png'
import React, { useState, useEffect } from "react";

export default function MoviesCard(props) {
    
    return (

        <div className='MoviesCardList__container'>
            <div className='MoviesCard__Container'>
                <div className='MoviesCard__headingContainer'>
                    <h3 className='MoviesCard__name'></h3>
                    <p className='MoviesCard__time'></p>
                </div>
                <a target='_blank' rel='noreferrer'>
                <img className='MoviesCard__imageMovie' alt='изображение из фильма'  />
                </a>
                <button className='MoviesCard__saveMovie MoviesCard__saveMovieSaved'>
                    <img className='MoviesCard__imgSave'  alt='значок галочки' />
                </button>
            </div>

        </div>
    )
}