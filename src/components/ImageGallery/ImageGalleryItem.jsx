import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, handleModal, index }) => {
  return (
    <GalleryItem onClick={() => handleModal(index)}>
      <Image src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  handleModal: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
