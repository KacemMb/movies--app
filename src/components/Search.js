import React from 'react'
import '../style/Search.css'
const Search = ({onSearch}) => {
  const handelSearchChange = (e)=>{
    onSearch(e.target.value)
  }
  return (
    <>
      <div className="search-box">
        <button className="btn-search"><i className="fas fa-search"><img src="./images/search.svg" alt="" width={"40px"}/></i></button>
        <input type="text" className="input-search" placeholder="Type to Search..." onChange={handelSearchChange}/>
      </div> 
    </>
  )
}

export default Search
