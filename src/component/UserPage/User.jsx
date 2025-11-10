import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Category from './Category';

export default function User() {
  return (
    <div>
      <Routes>
     
        <Route path="/" element={<Navigate to="home" />} />

        <Route path="home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
