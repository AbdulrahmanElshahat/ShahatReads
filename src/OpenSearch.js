import React from 'react';
import { Link } from 'react-router-dom';

const OpenSearch = ()=> {
    return(
        <div>
            <Link to='search'>
                    <img src={require('./icons/OpenSearch.svg')} alt='Read' className='icon'></img>
            </Link>
            <h2 className='shelf-title'>Add a Book</h2>
        </div>


    )
}

export default OpenSearch