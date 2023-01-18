import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieID } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const getDetailsMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovieDetails();
        setMovie(movies);
      } catch (error) {
        setError('Something went wrong...');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDetailsMovies();
  }, [movieID]);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
