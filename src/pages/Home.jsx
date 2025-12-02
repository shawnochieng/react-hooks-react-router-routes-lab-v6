import React from "react";
import NavBar from "../components/NavBar";
import { movies } from "../data";
import MovieCard from "../components/MovieCard";

// Home page
function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;

