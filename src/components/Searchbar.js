import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

export default function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    
    const handleSubmite = (e) => {
        e.preventDefault()
        navigate(`/Search?q=${searchTerm}`)
    }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmite}>
        <label htmlFor='search'>search</label>
        <input
            id='search'
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            // value={searchTerm}
            required
        />
      </form>
    </div>
  )
}
