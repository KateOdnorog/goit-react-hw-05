import API from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useEffect, useState } from "react";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(null);

  const {
    data: movies = null,
    isLoading,
    error,
  } = useFetchData(API.fetchMovieByQuery, query);

  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, [searchParams]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value === "") return console.log("Enter value");
    updateSearchParams("query", value);
    e.target.reset();
  };

  return (
    <>
      <form className={s.formSearch} onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred. Please try again later.</p>}

      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
