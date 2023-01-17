import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return <div>Movies</div>;
}

export default Movies;
