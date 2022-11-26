import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import Offcanva from '../Component/Offcanva';
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar bg="white" className='shadow-sm static py-3'  expand="lg">
    <Container>
        <LinkContainer to ="/" className='text-decoration-none font-extrabold'>
      <Navbar.Brand >Ecommerce</Navbar.Brand>
        </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
            

            <LinkContainer className='font-bold text-decoration-none italic' to="/menCloth">
          <Nav.Link >Men's Cloth</Nav.Link>
        </LinkContainer>

            <LinkContainer className='font-bold text-decoration-none italic' to="/electronics">
          <Nav.Link >electronics</Nav.Link>
        </LinkContainer>
            <LinkContainer className='font-bold text-decoration-none italic' to="/womenCloth">
          <Nav.Link >Women's Cloth</Nav.Link>
        </LinkContainer>
          
            <LinkContainer className='font-bold text-decoration-none italic' to="/jewlery">
          <Nav.Link  >Jewlery</Nav.Link>

            </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <BsCart4 size={30}  onClick ={handleShow} className ="cursor-pointer left-0" color='red'/>
          {/* <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <Offcanva show={show} handleClose ={handleClose}/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
<hr className='m-0 blur'/>
</>
  )
}

export default NavBar