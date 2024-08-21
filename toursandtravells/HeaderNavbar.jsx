import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HeaderNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className='border-bottom border-white'>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="#home"><MdEmail />Email: sevaltoursandtravells@gmail.com</Nav.Link>
            <Nav.Link href="#features"><FaPhone />+91 6383765538</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Seval Tours & Travells</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
            <Link rel="stylesheet" href="#home" to="/" className='text-white text-decoration-none'>
            Home
            </Link></Nav.Link>
            <Nav.Link href="#tour&travell">
            <Link rel="stylesheet" href="#tours&trab=vell" to="/home" className='text-white text-decoration-none'>
            Tours & Travells
            </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
            <Link rel="stylesheet" href="#contact" to="/contact" className='text-white text-decoration-none'>
            Contact Us
            </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
            <Link rel="stylesheet" href="#services" to="/servicesdata" className='text-white text-decoration-none'>
            Services
            </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
            <Link rel="stylesheet" href="#about" to="/about" className='text-white text-decoration-none'>
            About Us
            </Link>
            </Nav.Link>
            <Nav.Link href="#TourPackage">
            <Link rel="stylesheet" href="#" to="/tourpackagedata" className='text-white text-decoration-none'>
            Tour Package
            </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default HeaderNavbar
