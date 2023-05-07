import styled from './ImageGalleryItems.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItems = ({ arrayImages, zoomImage }) => {
  return arrayImages.map(({ id, largeImageURL, webformatURL }) => (
    <li
      key={id}
      className={styled.ImageGalleryItem}
      onClick={() => zoomImage(largeImageURL)}
    >
      <img
        className={styled['ImageGalleryItem-image']}
        src={webformatURL}
        alt=""
      />
    </li>
  ));
};

ImageGalleryItems.propTypes = {
  arrayImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  zoomImage: PropTypes.func.isRequired,
};
