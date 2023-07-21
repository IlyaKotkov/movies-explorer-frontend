import { useState, useEffect } from "react";

import './App.css'

import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

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
import { useLocation } from "react-router-dom";
import InfoTooltip from "../infoToolTip/infoToolTip";
import Preloader from "../Preloader/Preloader";

function App() {
  const [movies, setMovies] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    "name": '',
    "email": '',
    "_id": '',
  })
  const [email, setEmail] = useState("")
  const location = useLocation()
  const [infoMessage, setInfoMessage] = useState(null);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
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

  function handleLogin(formValue) {   
      if (!formValue.email || !formValue.password) {
        return
      }
      AuthApi.authorize(formValue.email, formValue.password)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token)
            setFormValue({ email: '', password: '' });
            setIsLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err.message)
        });
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    checkToken();
  }, [])

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      AuthApi.getContent(jwt).then((res) => {
        if (res) {
          setEmail(res.email)
          setIsLoggedIn(true);
        }
        setIsTokenChecked(true);
        setIsLoading(false);
      })
        .catch(err => {
          console.log(err)
          setIsTokenChecked(true);
          setIsLoading(false);
        })
        
    }
    else {
      setIsTokenChecked(true); 
      setIsLoading(false); 
      }
  }

  function handleShowInfoMessage(message) {
    setInfoMessage(message);
  }

  const closeAllPopups = () => {
    setInfoMessage(null);
  }


  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
        <Routes>
          <Route path='/' element={
            <Main
              isLoggedIn={isLoggedIn}
            />
          } />

          <Route
            path='/movies'
            element={
              <ProtectedRouteElement
                isLoggedIn={isLoggedIn}
                element={Movies}
              />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                isLoggedIn={isLoggedIn}
                element={SavedMovies}
              />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                isLoggedIn={isLoggedIn}
                element={Profile}
                handleShowInfoMessage={handleShowInfoMessage}
                emailUser={email}
                onExit={handleLogout}
              />
            }
          />

          <Route path='/signin' element={
            <Login
              onLogin={handleLogin}
              setEmail={setEmail}
            />
          }
          />

          <Route path='/signup' element={
            <Register 
              onLogin={handleLogin}
            />
          }
          />
          {location.pathname !== '/' && (
            <Route
              path="*"
              element={
                <NotFoundError />
              }
          />
          )}
        </Routes>
        )}
        <InfoTooltip
          onClose={closeAllPopups}
          message={infoMessage}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App