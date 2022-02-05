import React, { useState } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './componets/About';
import Portfolio from "./componets/Portfolio";
import { Nav, Navbar } from 'react-bootstrap';
import ContactForm from './componets/Contact';

function App() {

  const [contactSelected, setContactSelected, currentCategory, setCurrentCategory] = useState(false);

  return (
    <div className="App">
       <Navbar bg="primary" variant="dark"
               fixed="top">
                <Navbar.Brand href="#home">Seth Hixon</Navbar.Brand>
                <Nav className="me-auto">
                  <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}></a>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#port">Portfolio</Nav.Link>  
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar>
         {!contactSelected ? (
           <>
           <About></About>
           <Portfolio currentCategory={currentCategory}></Portfolio>
           </>
         ) : (
           <ContactForm></ContactForm>
         )}
    </div>
  );
}

export default App;