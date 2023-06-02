import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/" className='fs-2 fw-bold'>ShowBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={`fs-5 ${location.pathname === '/' ? 'active' : ''}`}>
              {location.pathname === '/' ? <strong>Home</strong> : 'Home'}
            </Nav.Link>
            <Nav.Link href="/about" className={`fs-5 ${location.pathname === '/about' ? 'active' : ''}`}>
              {location.pathname === '/about' ? <strong>About</strong> : 'About'}
            </Nav.Link>
            <Nav.Link href="/contact" className={`fs-5 ${location.pathname === '/contact' ? 'active' : ''}`}>
              {location.pathname === '/contact' ? <strong>Contact</strong> : 'Contact'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
