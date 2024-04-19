import React from "react";
import css from "./SearchBox.module.css";
function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={css.searchBoxContainer}>
      <input
        type="text"
        className={css.searchBoxInput}
        id="searchBar"
        placeholder="Search your contact"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
