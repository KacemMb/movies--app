import React, { useState } from 'react'
import NavBar from './pages/NavBar'
import MovieList from './pages/MovieList'
import MovieData from './Data/MovieData.json'

function App() {
  const [newMovies, setnewMovies] = useState(MovieData);
  const [Searsh, setSearsh] = useState("");
  const onSearsh = (genre)=>{
    setSearsh(genre)
  }
  const [genreFilter, setgenreFilter] = useState("");
  const onGenre = (genre)=>{
    setgenreFilter(genre)
  }
  const [languageFilter, setlanguageFilter] = useState("");
  const onlanguage = (genre)=>{
    setlanguageFilter(genre)
  }
  const [ratingFilter, setratingFilter] = useState("");
  const onrating = (genre)=>{
    setratingFilter(genre)
  }
  const onNewMovie = (movie)=>{
    setnewMovies([...newMovies,movie])
  }
  return (
    <div>
      <NavBar onNewMovie={onNewMovie} onGenre={onGenre} onlanguage={onlanguage} onrating={onrating} onSearsh ={onSearsh} />
      <MovieList Data ={newMovies} search={Searsh} genreFilter={genreFilter} languageFilter={languageFilter} ratingFilter={ratingFilter}/>
    </div> 
  )
}

export default App

