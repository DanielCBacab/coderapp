import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { GlobalProvider } from "../context/GlobalStateContext";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { cart } = GlobalProvider();
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="me-auto text-light text-decoration-none">
            DanielShop
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav text-light">
          <Nav>
            <Nav.Link>
              <NavLink
                to="/"
                className="me-auto text-light text-decoration-none"
              >
                Home
              </NavLink>
            </Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to="/categories/smarthphone"
                  className="me-auto text-dark text-decoration-none"
                >
                  Smarthphones
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/categories/tablet"
                  className="me-auto text-dark text-decoration-none"
                >
                  Tablets
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link>
            <NavLink
              to="/checkout"
              className="me-auto text-light text-decoration-none"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {cart.length}
              </span>
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
