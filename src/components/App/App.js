import { useState, useEffect } from "react";

import './App.css'

import { Route, Routes, Navigate } from 'react-router-dom';

import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import Login from "../Login/Login"
import Register from "../Register/Register"
import NotFoundError from '../NotFoundError/NotFoundError';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from "../../utils/MainApi";
import mainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getInformation(),
        moviesApi.getInitialMovies()
      ])
        .then((values) => {
          setCurrentUser(values[0])
          setMovies([...values[1]])
        })
        .catch(err => console.log(err))
    }
  }, [isLoggedIn]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>

          <Route path='/'  element={<Main />}/>

          <Route path='/movies' 
              element={<Movies/>}
            
          />

          <Route path='/saved-movies' 
              element={<SavedMovies/>}
           
          />

          <Route path='/profile' 
            
              element={<Profile/>}
            
          
          />

          <Route path='/signin' element={
            <Login

            />
          } />

          <Route path='/signup' element={
            <Register

            />
          } />

          <Route
            path="*"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App