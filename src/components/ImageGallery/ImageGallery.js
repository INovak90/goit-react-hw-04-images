import { ImageGalleryItems } from 'components/ImageGalleryItems/ImageGalleryItems';
import { useState } from 'react';
import styled from './ImageGallery.module.css';

import { BallTriangle } from 'react-loader-spinner';
import { ErrorMessage } from './ErrorMessage';
import { ImageModal } from 'components/Modal/ImageModal';
import { LoadMore } from 'components/LoadMore/LoadMore';
import PropTypes from 'prop-types';

export const ImageGallery = ({
  arrayImages,
  error,
  isLoading,
  onLoadMore,
  loadMore,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const zoomImage = image => {
    setSelectedImage(image);
  };
  const onCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main>
      {error && <ErrorMessage error={error} />}
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={styled.Loader}
          wrapperStyle=""
          visible={true}
        />
      )}
      <ul className={styled.ImageGallery}>
        {arrayImages && !isLoading && (
          <ImageGalleryItems arrayImages={arrayImages} zoomImage={zoomImage} />
        )}
      </ul>
      {!isLoading && (
        <LoadMore
          onLoadMore={onLoadMore}
          arrayImages={arrayImages}
          isLoading={isLoading}
          loadMore={loadMore}
        />
      )}

      <ImageModal
        onCloseModal={onCloseModal}
        isOpen={selectedImage !== null}
        image={selectedImage}
      />
    </main>
  );
};

ImageGallery.propTypes = {
  arrayImages: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  loadMore: PropTypes.bool.isRequired,
};
