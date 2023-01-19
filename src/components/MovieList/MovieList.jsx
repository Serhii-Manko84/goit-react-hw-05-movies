import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, prevLocation }) => {
  return (
    <>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: prevLocation }}>
              <p>{movie.title ?? movie.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.protoType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  prevLocation: Object.isRequired,
};

export default MovieList;
