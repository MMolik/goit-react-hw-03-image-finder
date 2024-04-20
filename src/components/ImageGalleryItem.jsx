import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css'

const ImageGalleryItem = ({ id, src, onClick }) => (
  <li className="imageGalleryItem" key={id} onClick={() => onClick(id)}>
    <img src={src} alt="" id={id} className="imageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;