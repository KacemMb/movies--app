import React from 'react'
import { useParams } from 'react-router-dom';
import '../style/Watching.css'

const Watching = ({Data}) => {
    const  id  = useParams();
    if (!Data || Data.length === 0) {
        return <div>No movie data available</div>;
      }
    const selectedMovie = Data.find(movie => movie.id ===  parseInt(id.id));
    if (!selectedMovie) {
        return <div>Movie not found</div>;
      }
      else
      {
        
      }
      
  return (
    <div className='Watching'>
      <img src={selectedMovie.image} alt="" width={"150px"} height={"240px"}/>
      <div className='movieInformations'>
        <h2>{selectedMovie.title}</h2>
        <p>{selectedMovie.genre}</p>
        <p>{selectedMovie.rating}</p>
        <p>{selectedMovie.description}</p>
        <p>{selectedMovie.langage}</p>
        <video src="" controls></video>
      </div>
    </div>
  )
}

export default Watching
