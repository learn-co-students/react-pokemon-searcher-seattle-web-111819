import React from 'react'

// Converted to a simple, stateless component
const Search = props => 
  // No explicit return needed because it's an arrow function with no non-returned data (functions, variables, etc)
  <div className="ui search">
    <div className="ui icon input">
      <input 
        className="prompt" 
        // Had to use an anonymous function in order to pass a argument to this callback
        // Otherwise, could have made this a functional component and added a handleChange function
        onChange={e => props.onChangeSearch(e.target.value)} 
        value={props.search}
      />
      <i className="search icon" />
    </div>
  </div>

export default Search