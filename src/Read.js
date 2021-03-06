import React, { Component } from 'react';
import BackToHome from './BackToHome'
import Bookshelf from './BookShelf';
class Read extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div>
        <div>
          <BackToHome/>
        </div>
          {bookshelves.map( function(shelf) {
                if (shelf.key==='read'){
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
    );
  }
}

export default Read;