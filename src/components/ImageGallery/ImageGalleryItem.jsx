import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, handleModal, index }) => {
  return (
    <GalleryItem onClick={() => handleModal(index)}>
      <Image src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  );
};
