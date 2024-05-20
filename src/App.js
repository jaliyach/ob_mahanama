import logo from './logo.svg';
import './App.css';
import HomePage from '../src/pages/HomePage/HomePage'
import Invoice from '../src/pages/Invoice/Invoice'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
     
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Invoice/:id" element={<Invoice />} />
        
        </Routes>
     
    </Router>
  );
};

export default App;
