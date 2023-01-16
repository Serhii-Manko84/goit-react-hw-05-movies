import { NavLink, Routes, Route } from 'react-router-dom';
import Cast from './pages/Cast/Cast';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import Reviews from './pages/Reviews/Reviews';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <>
      <div>
        <header className={css.header}>
          <nav>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
