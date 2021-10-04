import React, { useEffect, useState } from 'react';
import BandDetails from '../BandDetails/BandDetails';
import SelectedBand from '../SelectedBand/SelectedBand';
import './Band.css';

const Band = () => {

    // state declare...
    const [bands, setBands] = useState([]);
    const [singer, setSinger] = useState([]);
    const [costs, setCosts] = useState([]);
    
    // useEffect declare...
    useEffect(()=>{
        fetch('./band.json')
        .then(res => res.json())
        .then(data => setBands(data))
    },[])
    
    const selectBand = (band,cost) =>{
        const newCost = [...costs, cost]
        setCosts(newCost)
      const newSinger = [...singer, band]
      setSinger(newSinger)
    }
    

    return (

        // bandDetails main component...
        <div className='band-container'>
            <div className='selectedBand-container'>
                <SelectedBand singer={singer} costs={costs}></SelectedBand>
            </div>

            <div className='bandDetails-container'>
                {
                    // map... 
                    bands.map(band => <BandDetails
                        key={band.id}
                        selectBand={selectBand}
                        band={band}>
                    </BandDetails>)
                }
            </div>
        </div>
    );
};

export default Band;