import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Links from './pages/Links';  // Keeping import for future use

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default Main;