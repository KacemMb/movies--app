import React from 'react';
import '../style/MovieList.css'; // Importing CSS file for styling
import MovieCard from '../components/MovieCard'; // Importing MovieCard component

// Functional component for displaying a list of movies
const MovieList = ({ Data, search, genreFilter, languageFilter, ratingFilter }) => {
  // Filtering movies based on search term, genre filter, language filter, and rating filter
  const filteredMovies = Data.filter((movie) => {
    // Check if the movie title exists and matches the search term (case-insensitive)
    const matchesSearch = movie.title && movie.title.toLowerCase().includes(search.toLowerCase());

    // Check if the movie genre exists and matches the genre filter (case-insensitive)
    const matchesGenre =  genreFilter ? (movie.genre && movie.genre.toLowerCase() === genreFilter.toLowerCase()) : true;

    // Check if the movie language exists and matches the language filter (case-insensitive)
    const matchesLanguage =  languageFilter ? (movie.language && movie.language.toLowerCase() === languageFilter.toLowerCase()) : true;
    
    // Check if the movie rating exists and matches the rating filter
    const matchesRating =  ratingFilter ? (movie.rating && movie.rating === parseInt(ratingFilter)) : true;

    // Return true if all conditions are met, false otherwise
    return matchesSearch && matchesGenre && matchesRating && matchesLanguage;
  });
  return (
    <div className='MovieList'> {/* Container for the movie list */}
      {/* Mapping through filtered movies and rendering MovieCard for each */}
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} dis={movie.description} image={movie.image} rating={movie.rating} id={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
