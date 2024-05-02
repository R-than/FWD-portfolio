import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import HamburgerMenu from './components/Hamburger';



function App() {
  return (
    <div className="App bg-black">      
      {/* <Navigation /> */}
      <HamburgerMenu />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
      <Cursor/>
    </div>
  );
}

export default App;