import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './componets/About';
import Portfolio from "./componets/Portfolio";
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar bg="primary" variant="dark"
               fixed="top">
                <Navbar.Brand href="#home">Seth Hixon</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#port">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
         <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;