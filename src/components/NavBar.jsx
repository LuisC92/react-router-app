import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>HomePage</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
