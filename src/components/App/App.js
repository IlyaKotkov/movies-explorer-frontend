import { Route, Routes } from 'react-router-dom';

import Main from "../Main"
import Movies from "../Movies"
import SavedMovies from "../SavedMovies"
import Profile from "../Profile"
import Login from "../Login"
import Register from "../Register"

function App() {
  return (
    <div className="page">
      <Routes>

        <Route path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
