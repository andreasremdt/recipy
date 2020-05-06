import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="main-navigation">
      <Link className="logo" to="/">
        Recipy
      </Link>
      <NavLink className="link" activeClassName="-active" to="/" exact>
        My recipes
      </NavLink>
      <NavLink className="link" activeClassName="-active" to="/recipe/create">
        Add recipe
      </NavLink>
    </nav>
  );
}

export default Navigation;
