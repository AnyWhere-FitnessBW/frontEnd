import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";

// import Dashboard from './Dashboard';
import SignUp from "./SignUp";
// import Classes from './ClassCardContainer';
import Login from "./Login";

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { myClasses, login, signUp, classes, search } = props;

  const toggle = () => setIsOpen(!isOpen);

  const logout = (event) => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          | &ensp;A N Y W H E R E &ensp; F I T N E S S{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">
                Home
                </NavLink>
            </li>

            {myClasses ? (
              <li className="nav-item">
                <NavLink to="/classes" className="nav-link">
                  My Classes
                </NavLink>
              </li>
            ) : null}

            {signUp ? (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign-Up
                </NavLink>
              </li>
            ) : null}

            {login ? (
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Login
                </NavLink>
              </li>
            ) : null}

            {classes ? (
              <li className="nav-item">
                <NavLink to="/dashboard/client" className="nav-link">
                  Classes
                </NavLink>
              </li>
            ) : null}

            {search ? (
              <li className="nav-item">
                <NavLink to="/classes/search" className="nav-link">
                  Classes
                </NavLink>
              </li>
            ) : null}

            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={logout}>
                Logout
              </NavLink>
            </li>

            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
