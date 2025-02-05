import { Movie } from "../types/movie";
import StarRating from "../Stars";

export interface Props {
  movie: Movie;
}

function MovieCard(props: Props) {
  const movie = props.movie;

  return (
    <li className="movie-card">
      <p className="title">{movie.title}</p>
      <p className="descriptione">{movie.overview}</p>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <StarRating rating={movie.vote_average} />
    </li> // Renderiza os títulos dos filmes
  );
}

export default MovieCard;
