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
            <Nav.Link href='/Accueil'>Acceuil</Nav.Link>
            <Nav.Link href='/Profile'>Mon Profil</Nav.Link>
            <Nav.Link href='/Gestion_production'>Gestion du production</Nav.Link>
            <NavDropdown title="Congés et Absences" id="basic-nav-dropdown">
              <NavDropdown.Item href='/Planing_Absences'>Planning absences</NavDropdown.Item>
              <NavDropdown.Item href='/Demandes'>
                Mes demandes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mes compteurs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/notes_frais">Notes de frais</Nav.Link>
            <Nav.Link href='/documents'>Mes documents</Nav.Link>
            <Nav.Link href='/message'>Messages</Nav.Link>
            <Nav.Link href="/deconnexion">Deconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
