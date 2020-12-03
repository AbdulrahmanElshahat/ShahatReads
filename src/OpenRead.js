import React from 'react';
import { Link } from 'react-router-dom';

const OpenRead = ()=> {
    return(
        <div>
            <Link to='Read'>
                    <img src={require('./icons/Read.svg')} alt='Read' className='icon'></img>
            </Link>
            <h2 className='shelf-title'>Read</h2>
        </div>


    )
}

export default OpenRead