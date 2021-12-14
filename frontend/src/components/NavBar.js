import React, { Component } from "react";
import "./css styles/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a className="active" href="#logo">
              Lorem
            </a>
          </li>
          <li>
            <a href="#language">Language</a>
          </li>
          <li>
            <a href="#account">account</a>
          </li>
          <li>
            <a href="#logged">sign out</a>
          </li>
          <li>
            <a href="#cart">cart</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
