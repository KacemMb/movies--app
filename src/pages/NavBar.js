import React from 'react';
import Logo from '../components/Logo'; // Importing Logo component
import AddMovieModal from '../components/AddMovieModal'; // Importing AddMovieModal component
import FilterModal from '../components/FilterModal'; // Importing FilterModal component
import Search from '../components/Search'; // Importing Search component
import '../style/NavBar.css'; // Importing CSS file for styling
import { Link } from 'react-router-dom';

// Functional component for navigation bar
const NavBar = ({ onNewMovie, onGenre, onLanguage, onRating, onSearch }) => {
  return (
    <div className='NavBar'> {/* Container for the navigation bar */}
    <Link to="home"><Logo /> {/* Logo component */}</Link>
      <div className='navigation'> {/* Navigation links */}
        <Search onSearch={onSearch} /> {/* Search component */}
        <AddMovieModal onNewMovie={onNewMovie} /> {/* AddMovieModal component */}
        <FilterModal onGenre={onGenre} onLanguage={onLanguage} onRating={onRating} /> {/* FilterModal component */}
      </div>
    </div>
  );
}

export default NavBar;
