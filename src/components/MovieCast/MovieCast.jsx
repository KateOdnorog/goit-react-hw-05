import API from "../../services/api.js";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const {
    data: movieCast = [],
    isLoading,
    error,
  } = useFetchData(API.fetchMovieCast, movieId);

  return (
    <>
      <h2 className={s.titleH2}>Cast</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred. Please try again later.</p>}
      {!movieCast?.length ? (
        <p>Sorry, the cast for this movie is missing.</p>
      ) : (
        <ul className={s.listCast}>
          {movieCast.map((actor) => (
            <li className={s.listCastItem} key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : error
                }
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
