import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

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
                    <Nav.link href="#port">Portfolio</Nav.link>
                    <Nav.link href="#contact">Contact</Nav.link>
                    <Nav.link href="#resume">Resume</Nav.link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

