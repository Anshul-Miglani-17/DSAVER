import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row pl-3 pr-3">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <NavLink className="navbar_brand navbar-brand pl-4" to="">
                DSAVER
              </NavLink>
              <button
                className=" navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="main navbar-nav ml-auto pr-4">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="active_menu"
                      className="nav-link"
                      to="/home"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_menu"
                      className="nav-link"
                      to="/algorithms"
                    >
                      Algorithms
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_menu"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_menu"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
