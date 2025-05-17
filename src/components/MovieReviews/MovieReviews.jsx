import API from "../../services/api.js";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const {
    data: movieReviews = [],
    isLoading,
    error,
  } = useFetchData(API.fetchMovieReviews, movieId);

  return (
    <>
      <h2 className={s.titleH2}>Reviews</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred. Please try again later.</p>}
      {!movieReviews?.length ? (
        <p>Sorry, the reviews for this movie is missing.</p>
      ) : (
        <ul>
          {movieReviews.map((review) => (
            <li className={s.listReviewItem} key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
