import React, { Component } from 'react';
import BackToHome from './BackToHome'
import Bookshelf from './BookShelf';

class CurrentlyReading extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;


    return (
      <div>
        <div>
          <BackToHome/>
        </div>
        <div>
          {bookshelves.map( function(shelf) {
            if (shelf.key==='currentlyReading'){
              return <Bookshelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              onMove={onMove}
            />
            } return ''
          }

          
        )}
        
        </div>
      </div>
    );
  }
}

export default CurrentlyReading;