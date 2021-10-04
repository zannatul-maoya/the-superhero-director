import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import './SelectedBand.css';

const SelectedBand = (props) => {

    const costs = props.costs;
    let totalCost = 0;

    // lop for total cost 
    for (const cost of costs) {
        totalCost = totalCost + cost;
    }

    // FontAwesomeIcon 
    const downArrow = <FontAwesomeIcon icon={faArrowDown} />
    return (

        // total selected part 
        <div className='selectedBand'>
            <h5>Total Selected place: {props.singer.length}</h5>
            <h5>Total Costing for Travel : ${totalCost} </h5>
            <h4>Selected place {downArrow}</h4>
            {
                props.singer.map((cost,id)=> <h3 key={id}>{cost}
                </h3>)
            }
            <button>Confirm</button>
        </div>
    );
};

export default SelectedBand;