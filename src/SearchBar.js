
import React from 'react';
import BackToHome from './BackToHome'
import SearchBooksInput from './SearchBooksInput'

const SearchBar = props => {
    const { onSearch, onResetSearch } = props;
    return (
      <div className="search-books-bar">
        <BackToHome onResetSearch={onResetSearch} />
        <SearchBooksInput onSearch={onSearch} />
      </div>
    );
  };



export default SearchBar;

