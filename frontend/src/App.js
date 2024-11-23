import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Importa el archivo Home.js
import CreateProducts from './CreateProducts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/products" element={<CreateProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
