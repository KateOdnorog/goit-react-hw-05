import API from "../../services/api.js";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useRef } from "react";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const prewLocation = useRef(location.state || "/movies");

  const {
    data: movieInfo = null,
    isLoading,
    error,
  } = useFetchData(API.fetchMovieById, movieId);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred. Please try again later.</p>}
      {movieInfo && (
        <section className={s.sectionDetails}>
          <div>
            <Link to={prewLocation.current}>Go back</Link>

            <img
              className={s.imageMovie}
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                  : error
              }
              alt={movieInfo.title}
            />

            <h2>{`${movieInfo.title} (${movieInfo.release_date.slice(
              0,
              4
            )})`}</h2>
            <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
            <h3 className={s.titleH3}>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3 className={s.titleH3}>Genres</h3>
            <p>{movieInfo.genres.map((genre) => genre.name).join(", ")}</p>
            <h3 className={s.titleH3}>Additional information</h3>
            <ul className={s.listDetails}>
              <li>
                <Link to="cast">cast</Link>
              </li>
              <li>
                <Link to="reviews">reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
