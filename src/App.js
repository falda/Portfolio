import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav';  
import Accueil from './pages/accueil';
import About from './pages/about';
import Projets from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;