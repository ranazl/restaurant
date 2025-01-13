import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';
import RestaurantInf from './pages/RestaurantInf/RestaurantInf';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/restaurantInf" element={<RestaurantInf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
