import React, { Component } from "react";
import "./css styles/SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <input type="text" placeholder="location.." />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    );
  }
}

export default SearchBar;
