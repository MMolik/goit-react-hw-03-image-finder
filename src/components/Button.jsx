import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Button = ({ onLoadMore }) => (
  <div className="buttonDiv">
    <button type="button" className="button" onClick={onLoadMore}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
