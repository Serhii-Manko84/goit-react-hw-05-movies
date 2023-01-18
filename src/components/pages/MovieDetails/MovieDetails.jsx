import Loader from 'components/Loader/Loader';
import PaheHeading from 'components/PageHeading/PageHeading';
import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
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
      <div>
        <button type="text" onClick={handleClick} className={css.backButton}>
          Go back
        </button>
      </div>
      <div>{movie && <PaheHeading text={movie.title ?? movie.name} />}</div>
      {isLoading && <Loader />}
      {movie && (
        <div className={css.movieDetails}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title ?? movie.name}
          />
          <h2>{movie.title ?? movie.name}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
