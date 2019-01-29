import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
   return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/CreatePost/">Create Post</Link>
          </li>
        </ul>
      </nav>
    </div>
);
}

export default Navigation;