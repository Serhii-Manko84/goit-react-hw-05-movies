import Loader from 'components/Loader/Loader';
import PaheHeading from 'components/PageHeading/PageHeading';
import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api';

import css from './MovieDetails.module.css';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movie = await getMovieDetails(movieId);

        setMovie(movie);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <div>{movie && <PaheHeading text={movie.title ?? movie.name} />}</div>
      <div className={css.movie}>
        <button type="text" onClick={handleClick} className={css.backButton}>
          Go back
        </button>
      </div>
      {isLoading && <Loader />}
      {movie && (
        <div className={css.details}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title ?? movie.name}
          />
          <div className={css.description}>
            <h2>{movie.title ?? movie.name}</h2>
            <p>User Score: {Math.round(movie.popularity)} % </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </div>
        </div>
      )}
      <div className={css.description}>
        <h2>Additional Information</h2>
        <NavLink to={`cast`} state={location.state}>
          <p>Cast</p>
        </NavLink>
        <NavLink to={`reviews`} state={location.state}>
          <p>Reviews</p>
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
