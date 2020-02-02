import React from 'react'

// Made this a simple component
const Search = props => 
  <div className="ui search">
    <div className="ui icon input">
      <input 
        className="prompt" 
        onChange={e => props.onChangeSearch(e.target.value)} 
        value={props.search}
      />
      <i className="search icon" />
    </div>
  </div>

export default Search