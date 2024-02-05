import React from 'react'
import '../style/Search.css'
const Search = ({onSearsh}) => {
  // const [Search, setSearch] = useState('');
  const handelSearchChange = (e)=>{
    // setSearch(e.target.value)
    onSearsh(e.target.value)
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
