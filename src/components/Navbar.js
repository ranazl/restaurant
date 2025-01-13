import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  const clickMoreBtn = () => {
    navigate('/restaurantInf');
  };

  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h3>Food Recipe</h3>
        </Link>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link to="/create">Create Recipe</Link>
      </nav>
      <div className="headerContainer">
        <h1 className="headerText">
          Feel The Unique & <br /> Original Taste From Us
        </h1>
        <Button
          variant="contained"
          className="moreBtn"
          endIcon={<ArrowForwardIcon />}
          onClick={clickMoreBtn}
        >
          See More
        </Button>
      </div>
    </div>
  );
}
