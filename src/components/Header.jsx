import React from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <Link className="name navbar-brand" to="/">Malk Daboor</Link>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
          </ul>
    </nav>
  );
}

export default NavBar;