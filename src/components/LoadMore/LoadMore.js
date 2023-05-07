import styled from './LoadMore.module.css';
import PropTypes from 'prop-types';
import { BallTriangle } from 'react-loader-spinner';

export const LoadMore = ({ onLoadMore, loadMore, arrayImages }) => {
  if (arrayImages && !loadMore) {
    return (
      <div className={styled.BoxLoadMore}>
        <button onClick={onLoadMore} className={styled.Button} type="button">
          Load more
        </button>
      </div>
    );
  }
  if (loadMore) {
    return (
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
    );
  }
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  loadMore: PropTypes.bool.isRequired,
  arrayImages: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};
