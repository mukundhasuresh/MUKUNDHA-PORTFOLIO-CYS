import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterNav from './components/FooterNav';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsIndex from './pages/ProjectsIndex';
import Skills from './pages/Skills';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <FooterNav />
      <Analytics />
    </Router>
  );
}

export default App;
