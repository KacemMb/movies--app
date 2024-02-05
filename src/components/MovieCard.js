import React from 'react'
import '../style/MovieCard.css'

const MovieCard = ({title,dis,image,rating}) => {
  return (
    <main>
  <div class = "card">
    <img src={image} alt=""/>
    <div class="card-content">
      <h2>
        {title}
      </h2>
      <p>
        {dis}
      </p>
      <a href="test" class="button">
        Play
        <span class="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>
  )
}

export default MovieCard
