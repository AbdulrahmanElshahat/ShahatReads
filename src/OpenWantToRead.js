import React from 'react';
import { Link } from 'react-router-dom';

const OPenWantToRead = ()=> {
    return(
        <div>
            <Link to='WantToRead'>
                    <img src={require('./icons/WantToRead.svg')} alt='Want To Read Icon' className='icon'></img>
            </Link>
            <h2 className='shelf-title'>Want To Read </h2>
        </div>


    )
}

export default OPenWantToRead



