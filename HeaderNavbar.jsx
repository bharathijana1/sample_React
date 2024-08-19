import React from 'react'
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const HeaderNavbar = () => {
    const { totalItems } = useCart();

  return (
    <>
        
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>ShoppingMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='text-white bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
            <Link to="/" className="nav-item text-decoration-none"><a href="" className="nav-link active text-white">Home</a></Link>
            </Nav.Link>
            <Nav.Link href="#link">
            <Link to="/card"  className="nav-item text-decoration-none"><a href=""className="nav-link text-white">Cart</a></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    </>
  )
}
