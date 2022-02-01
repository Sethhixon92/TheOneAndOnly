import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrp';

function Nav() { 
    
    return (
        <header>
            <h2>
                <a href='/'>
                </a>
            </h2>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.brand href="#home">Seth Hixon</Navbar.brand>
                <Nav className="me-auto">
                    <Nav.link href="#about">About Me</Nav.link>
                    <Nav.link href="#portfolio">Portfolio</Nav.link>
                    <Nav.link href="#contact">Contact</Nav.link>
                    <Nav.link href="#resume">Resume</Nav.link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Nav;