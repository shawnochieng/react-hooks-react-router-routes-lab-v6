
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { movies } from "../data";

// Movie

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
