import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';

export const PortfolioNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">
            <Link to="/" className="nav-item text-decoration-none"><a href="" className="nav-link active text-white">Index</a></Link>
            </Nav.Link>
            <Nav.Link href="#home">
            <Link to="Home" className="nav-item text-decoration-none"><a href="" className="nav-link active text-white">Home</a></Link>
            </Nav.Link>
            <Nav.Link href="#aboutme">
            <Link to="/about"  className="nav-item text-decoration-none"><a href=""className="nav-link text-white">AboutMe</a></Link>
            </Nav.Link>
            <Nav.Link href="#contactme">
            <Link to="/contact"  className="nav-item text-decoration-none"><a href=""className="nav-link text-white">Contact Me</a></Link>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}
