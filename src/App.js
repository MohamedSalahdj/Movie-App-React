import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import LoginFunctionComponent from './Pages/LoginPage/LoginFunctionComponent';
import RegisterFunctionComponent from './Pages/RegisterPage/RegisterFunctionComponent';
import { BrowserRouter, Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import TaskContainer from './Pages/ToDo/ToDoFunction';
import ListMoviesfunction from './Pages/ListMovies/ListMoviesfunction';
import NavBarComponent from './Components/NavBarComponent';
import MovieDetailsFunction from './Pages/MovieDetails/MovieDetailsFunction';
import MovieFavorit from './Pages/MovieFavorit/MovieFavorit';
import MovieSearch from './Pages/MovieSearch/MovieSearch';

function App() {
  return (
    <>
       <BrowserRouter>
       <NavBarComponent />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/login'} component={LoginFunctionComponent} />
          <Route exact path={'/register'} component={RegisterFunctionComponent} />
          <Route exact path={'/todo'} component={TaskContainer} />
          <Route exact path={'/movies'} component={ListMoviesfunction} />
          <Route exact path={'/movies/:moviename'} component={MovieSearch} />
          <Route exact path={'/moviefavorit'} component={MovieFavorit} />
          <Route exact path={'/moviedetail/:movieId'} component={MovieDetailsFunction} />
        </Switch>
       </BrowserRouter>
    </>
  );
}

export default App;
