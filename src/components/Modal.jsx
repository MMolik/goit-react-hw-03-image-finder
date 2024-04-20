import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Modal = ({ imgUrl, alt = "", onClose }) => ( // Dodaliśmy domyślną wartość dla alt
  <div className="overlay" onClick={onClose}>
    <div className="modal">
      <img src={imgUrl.toString()} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  imgUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  alt: PropTypes.string, // Zmieniliśmy PropTypes na opcjonalne
  onClose: PropTypes.func.isRequired,
};

export default Modal;
