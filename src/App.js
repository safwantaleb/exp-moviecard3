import logo from "./logo.svg";
import "./styles.css";

import React, { useState } from "react";
import "./styles.css";
import AddMovie from "./components/AddMovie";
import { movies } from "./constants/moives";
import MovieList from "./containers/MovieList";
export default function App() {
  const [movieList, setMovieList] = useState(movies);

  const handleAddMovie = (movie) => {
    const newMovie = { ...movie, id: Math.random() };
    console.log("movie", newMovie);
    setMovieList([...movieList, newMovie]);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newList = movieList.filter((movie) => movie.id !== id);
    setMovieList(newList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Movie App</h1>
      <MovieList movieList={movieList} handleDelete={handleDelete} />
      <AddMovie onAdd={handleAddMovie} />
    </div>
  );
}
