// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the global CSS file
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="app-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Fitness Tracker</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
