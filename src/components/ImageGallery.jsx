import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // Importuj funkcję v4 z pakietu uuid

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="imageGallery">
    {images.map(image => (
      <li key={uuidv4()}> {/* Wygeneruj unikalny klucz za pomocą uuidv4 */}
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onImageClick(image.webformatURL,image.id)}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
