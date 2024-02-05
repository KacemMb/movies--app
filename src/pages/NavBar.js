import React from 'react'
import Logo from '../components/Logo'
import AddMovieModal from '../components/AddMovieModal'
import FilterModal from '../components/FilterModal'
import Search from '../components/Search'
import '../style/NavBar.css'
const NavBar = ({onNewMovie , onGenre , onlanguage , onrating , onSearsh}) => {
  return (
    <div className='NavBar'>
      <Logo/>
      <div className='navigation'>
        <Search onSearsh ={onSearsh} />
        <AddMovieModal  onNewMovie = {onNewMovie} />
        <FilterModal onGenre={onGenre} onlanguage={onlanguage} onrating={onrating} />
      </div>
    </div>
  )
}

export default NavBar
