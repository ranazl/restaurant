import React from 'react';
import './Searchbar.css';

export default function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <form>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
