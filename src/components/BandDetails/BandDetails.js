import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons';
import './BandDetails.css';

const BandDetails = (props) => {
    
    // data distructaring... 
    const {img,plase, create, album, Singer, cost} = props.band;
    
    // FontAwesomeIcon ...
    const addIcon = <FontAwesomeIcon icon={faPlus} />
    const microphone = <FontAwesomeIcon icon={faMicrophoneAlt} />

    return (
        
            // band details...
            <div className='band-cart'>
            <img src={img} alt="" />
            <div className='band-details'>
            <p>place Name        : {plase}</p>
            <p>local singer {microphone}      : <small  className='vocal'>{Singer}</small></p>
            <p>famous from : {create}</p>
            <p>Total Album      : {album}</p>
            <p>Travel Cost        : ${cost}</p>
            <button onClick={()=>props.selectBand(plase,cost)}>{addIcon} select this place</button>
            </div>
        </div>
    );
};

export default BandDetails;