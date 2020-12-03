import React, { Component } from 'react';
import OpenCurrentlyReading from './OpenCurrentlyReading';
import OPenWantToRead from './OpenWantToRead';
import OpenRead from './OpenRead';
import OpenSearch from './OpenSearch';

class BookShelfCase extends Component {
    render() {
      return (
        <div >
          <div className="list-books-title">
            <h1>Shahat Reads</h1>
          </div>
          <div className="book-shelf-case">
          <OpenCurrentlyReading/>
          <OPenWantToRead/>
          <OpenRead/>
          <OpenSearch/>
          </div>
          
        </div>
      );
    }
  }
  
  export default BookShelfCase;