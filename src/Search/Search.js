import React from "react";

function Search(props) {

  return (
    <label>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
        type="text"
        placeholder="Search by name"
        value={props.searchValue}
        onChange={props.onSearchChange} />
    </label>
  )
}

export default Search;