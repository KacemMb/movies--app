import React from 'react';
import '../style/MovieCard.css'; // Importing CSS file for styling
import { Link } from 'react-router-dom';

// Functional component for displaying movie card
const MovieCard = ({id, title, dis, image }) => {
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
          <Link to={`/watching/${id}`}><a href="test" class="button">
            Play
            {/* Icon for the play button */}
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </a></Link>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
