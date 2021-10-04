import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGuitar, faHandSpock} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    
    // FontAwesomeIcon... 
    const guiter = <FontAwesomeIcon icon={faGuitar} />
    const handSpock = <FontAwesomeIcon icon={faHandSpock} />

    return (
        
        // header part ..
        <div className='header'>
            <nav>
                <a href="/buy ticket">Booking hotle</a>
                <a href="/address">Address</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </nav>
            <h1>World Travel Support </h1>
            <h4>Our Travel start 7th March... {guiter} {handSpock} {guiter}</h4>
            <h3>Total Budget For Travel -- 3 Million Tk</h3>
        </div>
    );
};

export default Header;