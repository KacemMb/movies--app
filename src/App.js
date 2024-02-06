import React, { useState } from 'react';
import NavBar from './pages/NavBar';
import MovieList from './pages/MovieList';
import MovieData from './Data/MovieData.json';

function App() {
  // State variables
  const [newMovies, setNewMovies] = useState(MovieData); // State for storing movie data
  const [search, setSearch] = useState(""); // State for search term
  const [genreFilter, setGenreFilter] = useState(""); // State for genre filter
  const [languageFilter, setLanguageFilter] = useState(""); // State for language filter
  const [ratingFilter, setRatingFilter] = useState(""); // State for rating filter

  // Function to handle search
  const onSearch = (genre) => {
    setSearch(genre); // Update search term state
  };

  // Function to handle genre filter
  const onGenre = (genre) => {
    setGenreFilter(genre); // Update genre filter state
  };

  // Function to handle language filter
  const onLanguage = (genre) => {
    setLanguageFilter(genre); // Update language filter state
  };

  // Function to handle rating filter
  const onRating = (genre) => {
    setRatingFilter(genre); // Update rating filter state
  };

  // Function to add new movie
  const onNewMovie = (movie) => {
    setNewMovies([...newMovies, movie]); // Add the new movie to the movie list
  };

  return (
    <div>
      {/* Navbar component */}
      <NavBar
        onNewMovie={onNewMovie}
        onGenre={onGenre}
        onLanguage={onLanguage}
        onRating={onRating}
        onSearch={onSearch}
      />
      {/* MovieList component */}
      <MovieList
        Data={newMovies}
        search={search}
        genreFilter={genreFilter}
        languageFilter={languageFilter}
        ratingFilter={ratingFilter}
      />
    </div>
  );
}

export default App;
