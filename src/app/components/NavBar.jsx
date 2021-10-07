import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className="nav-link"
            aria-current="page"
            activeClassName="bg-light"
          >
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="nav-link"
            aria-current="page"
            activeClassName="bg-light"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/users"
            className="nav-link"
            aria-current="page"
            activeClassName="bg-light"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavBar
