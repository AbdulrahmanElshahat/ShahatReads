
import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = props => {
  const { onResetSearch } = props;
  return (
    <Link to="/">
      <button className="close-search" onClick={onResetSearch}>
        Back To Home
      </button>
    </Link>
  );
};

export default BackToHome;