import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
        <p>{movie.time} minutes</p>
        <p>{movie.genres.join(", ")}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
