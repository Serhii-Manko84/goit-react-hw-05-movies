import Loader from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const movie = await getMovieReviews(movieId);
        setReviews(movie);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (reviews && reviews.length) > 0 ? (
    <>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author} </p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <>
      <h2>We don't have any reviews for this movie.</h2>
    </>
  );
};

export default Reviews;
