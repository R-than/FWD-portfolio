import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;