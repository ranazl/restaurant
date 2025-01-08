import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import Searchbar from './Searchbar';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'><h3> Food Recipe </h3></Link>
                <Searchbar />
                <Link to='/create'> Create Recipe </Link>
            </nav>
            <div>
                <h1 className='headerText'>Feel The Unique & <br /> Original Taste From Us</h1>
                {/* <Button variant="contained" className='moreBtn'>See More</Button> */}
            </div>
        </div>
    )
}
