import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar className="navbar">
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin">Users</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
