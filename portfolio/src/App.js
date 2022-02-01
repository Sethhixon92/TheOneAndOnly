import React from "react";
import './App.css';
import About from './componets/About';
import Nav from './componets/Nav';
import Gallery from "./componets/Gallery";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
