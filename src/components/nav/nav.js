import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
         
          <a >Score: {this.props.score}</a>
        
      </nav>
    );
  }
}

export default Nav;

