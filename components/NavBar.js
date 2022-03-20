import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const NavBar = () =>{
    return(
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Logo de la Empresa</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#cervezas">Cervezas</Nav.Link>
      <Nav.Link href="#whisky">Whisky</Nav.Link>
      <Nav.Link href="#vinos">Vinos</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )

}

export default NavBar