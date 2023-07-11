import { useState, useEffect } from "react";

import './App.css'

import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import Login from "../Login/Login"
import Register from "../Register/Register"
import NotFoundError from '../NotFoundError/NotFoundError';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";
import * as AuthApi from '../../utils/AuthApi';
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [movies, setMovies] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "email": '',
    "_id": '',
  })
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getInformation(),
        moviesApi.getInitialMovies()
      ])
        .then((values) => {
          setCurrentUser(values[0]);
          setMovies([...values[1]]);
        })
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

  function handleLogin(email) {
    setEmail(email)
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    checkToken();
  }, [navigate])

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      AuthApi.getContent(jwt).then((res) => {
        if (res) {
          setEmail(res.email)
          setIsLoggedIn(true);
          navigate("/movies", { replace: true })
        }
      })
        .catch(err => console.log(err))
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        <Routes>

          <Route path='/' element={<Main />} />

          <Route
            path='/movies'
            element={
              <ProtectedRouteElement
                element={<Movies
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                />}
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={<SavedMovies
                  isLoggedIn={isLoggedIn}
                />}
              />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={<Profile
                  isLoggedIn={isLoggedIn}
                  onExit={handleLogout}
                  emailUser={email}
                />}
              />
            }
          />

          <Route path='/signin' element={
            <Login
              onLogin={handleLogin}
              setEmail={setEmail}
            />
          } />

          <Route path='/signup' element={
            <Register

            />
          } />

          <Route
            path="*"
            element={
              isLoggedIn ? <Navigate to="/movies" /> : <Navigate to="/signin" />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App