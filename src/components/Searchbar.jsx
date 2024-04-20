import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
      <button type="submit" className="searchForm-button">
  <FontAwesomeIcon icon={faSearch} />
  <span className="searchForm-button-label">Search</span>
</button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
