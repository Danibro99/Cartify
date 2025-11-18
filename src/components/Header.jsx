import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-bootstrap';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-black fw-bold'><FontAwesomeIcon className='fs-1 me-2' icon={faTruckFast} ></FontAwesomeIcon>CartiFy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/wishlist'}><FontAwesomeIcon icon={faHeart}/>Wishlist <Badge bg='transparent' text='black' className='fs-5 ms-0' >10</Badge></Nav.Link>
            <Nav.Link as={Link} to={'/cart'}><FontAwesomeIcon icon={faCartShopping}/>Cart <Badge bg='transparent' text='black' className='fs-5 ms-0' >10</Badge></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header