import React from "react";
import "./css styles/Search.css";
const Search = () => (
  <form className="searchForm">
    <label>
      <span className="visually-hidden">Search </span>
    </label>
    <input type="text" id="header-search" placeholder="Search " name="s" />
    <button type="submit" className="searchButton">
      Search
    </button>
  </form>
);

export default Search;
