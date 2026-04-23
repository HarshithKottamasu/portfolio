import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [contact, setContact] = useState(false);

  return (
    <HashRouter>
      <Navbar setContact={setContact} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home setContact={setContact} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer setContact={setContact} />
      {contact && <ContactModal onClose={() => setContact(false)} />}
    </HashRouter>
  );
}

export default App;
