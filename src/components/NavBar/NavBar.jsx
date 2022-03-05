import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Widget from './Widget/Widget'

function NavBar() {
  return (
    <div className='navBar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
        <Navbar.Brand href="#home">Stadium Rosario</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Complejos</Nav.Link>
            <Nav.Link href="#pricing">Quienes Somos?</Nav.Link>
            <NavDropdown title="Reservas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deportes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Desafía a tu rival</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Organizá tu evento</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"style={{ fontSize:'24px' }}>Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#miCarrito">
                <Widget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>      

  )
}

export default NavBar