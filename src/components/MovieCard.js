import React from 'react';
import '../style/MovieCard.css'; // Importing CSS file for styling

// Functional component for displaying movie card
const MovieCard = ({ title, dis, image, rating }) => {
  return (
    <main>
      {/* Main container for the movie card */}
      <div class="card">
        {/* Movie image */}
        <img src={image} alt="" />
        {/* Card content container */}
        <div class="card-content">
          {/* Movie title */}
          <h2>{title}</h2>
          {/* Movie description */}
          <p>{dis}</p>
          {/* Play button */}
          <a href="test" class="button">
            Play
            {/* Icon for the play button */}
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
