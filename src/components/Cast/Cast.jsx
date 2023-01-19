import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const movie = await getMovieCast(movieId);
        setCast(movie);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <ul className={css.castList}>
        {Array.isArray(cast) &&
          cast?.map(castEl => {
            return (
              <li key={castEl.id} className={css.castItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${castEl.profile_path}`}
                  alt={`${castEl.name} portrait`}
                />
                <p>Name: {castEl.name}</p>
                <p>Character:{castEl.character} </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
