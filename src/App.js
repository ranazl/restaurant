import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/Create/Create';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
