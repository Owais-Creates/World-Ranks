import React from 'react'
import "./Search.css"
import search from "../../assets/Search.svg"

const Search = () => {
  return (

    <>
      <div className='search-container-div' >
      <h3 className='search-h1' >Found 234 Countires</h3>
        <img className='search-icon-img' src={search} alt="" />
        <input
          className='input-box'
          type="text" placeholder='Search by Country Name...' />
      </div>
    </>

  )
}

export default Search