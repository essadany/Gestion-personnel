import React from 'react'
import logo2 from '../assets/img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
export const Navs = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="mb-4" src={logo2} alt="" width="190" height="60" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="²">
            <Nav.Link href="#home">Acceuil</Nav.Link>
            <Nav.Link href="#link">Mon Profil</Nav.Link>
            <NavDropdown title="Conge Absence" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Les Conges</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link1">Gestion des Productions</Nav.Link>
            <Nav.Link href="#link2">Deconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
