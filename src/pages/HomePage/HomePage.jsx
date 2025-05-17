import API from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList";
import useFetchData from "../../hooks/useFetchData.js";
import s from "./HomePage.module.css";

const HomePage = () => {
  const {
    data: popularMovies = [],
    isLoading,
    error,
  } = useFetchData(API.fetchTrendingMovies);

  return (
    <section>
      <h1 className={s.mainTitle}>Trending today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred. Please try again later.</p>}
      {popularMovies?.length && <MovieList movies={popularMovies} />}
    </section>
  );
};

export default HomePage;
