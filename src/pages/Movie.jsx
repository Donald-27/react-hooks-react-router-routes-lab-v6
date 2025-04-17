import React from "react";

function Movie({ title, genres, poster, minutes, id }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <p>{minutes} minutes</p>
      <div>
        {genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </article>
  );
}

export default Movie;
