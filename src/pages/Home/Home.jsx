import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <div>
        <h2>Trending Movies</h2>
        <ul>
          {Array.isArray(movies) &&
            movies?.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <p>{movie.title ?? movie.name}</p>
                  </Link>
                </li>
              );
            })}
          <Link />
        </ul>
      </div>
    </>
  );
}

export default Home;
