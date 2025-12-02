import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/" end>Home</NavLink>
      
      <NavLink to="/directors">Directors</NavLink>
    </nav>
  );
}

export default NavBar;

