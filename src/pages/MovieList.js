import React from 'react';
import '../style/MovieList.css';
import MovieCard from '../components/MovieCard';

const MovieList = ({Data, search, genreFilter, languageFilter, ratingFilter}) => {
  const filteredMovies = Data.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = genreFilter ? movie.genre.toLowerCase() === genreFilter.toLowerCase() : true;

    const matchesLanguage = languageFilter ? movie.language.toLowerCase() === languageFilter.toLowerCase() : true;

    const matchesRating = ratingFilter ? movie.rating === parseInt(ratingFilter) : true;

    return matchesSearch && matchesGenre && matchesLanguage && matchesRating;
  });
  return (
    <div className='MovieList'>
      {filteredMovies.map((it) => (
        <MovieCard key = {it.id} title={it.title} dis={it.description} image={it.image} />
      ))}
    </div>
  );
};

export default MovieList;
