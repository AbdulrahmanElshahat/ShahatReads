import React from 'react';
import { Link } from 'react-router-dom';

const OpenCurrentlyReading = ()=> {
    return(
        <div>
            <Link to='CurrentlyReading'>
                    <img src={require('./icons/currentlyReading.svg')} alt='Currently Reading Icon' className='icon'></img>
            </Link>
            <h2 className='shelf-title'>Currently Reading</h2>
        </div>


    )
}

export default OpenCurrentlyReading

