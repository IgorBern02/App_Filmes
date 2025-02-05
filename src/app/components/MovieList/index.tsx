"use client";

import { memo, useState, useEffect, Suspense } from "react";
import "./style.scss";
import axios from "axios";
import { Movie } from "../types/movie";
import MovieCard from "../MovieCard/index";

const ModalMovieList = memo(() => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "08d267a3266551c5fcdef613021bfcc5",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results); // Armazena os filmes buscados no estado
    });
  };

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
});

const MovieList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalMovieList />
    </Suspense>
  );
};

export default memo(MovieList);
