import React from 'react';
import searchIcon from '../img/search-icon.svg'; // Adjust the path to your SVG file

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button>
        <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
      </button>
    </div>
  );
};

export default SearchBar;
