import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [showCartContainer, setShowCartContainer] = useState(false);

  const handleMouseEnter = () => {
    setShowCartContainer(true);
  };

  const handleMouseLeave = () => {
    setShowCartContainer(false);
  };

  return (
    <Navbar expand="lg m-3" className="custom-navbar">
      <Navbar.Brand href="#home">Garden Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <div
            className="icon-link"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaShoppingCart style={{ fontSize: "20px" }} />
            {showCartContainer && (
              <div className="cart-container">
                <p className="mt-2">No products in the cart</p>
                <button className="continue-shopping-button mt-1 bg-transparent btnshop">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
          <Nav.Link href="#user" className="icon-link">
            <FaUser style={{ fontSize: "20px", color: "#155815" }} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
