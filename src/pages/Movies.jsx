import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <main>
      <h1>All Movies</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </main>
  );
}

export default Movies;
