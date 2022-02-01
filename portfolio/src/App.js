import React from "react";
import './App.css';
import About from './componets/About';
import Nav from './componets/Nav';
import TitlebarBelowImageList from "./componets/Gallery";

function App() {
  return (
    <div>
      <header>'Seth Hixon'</header>
      <Nav></Nav>
      <main>
      <TitlebarBelowImageList></TitlebarBelowImageList>
        <About></About>
      </main>
    </div>
  );
}

export default App;
