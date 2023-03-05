import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { fetchImages } from 'services/fetchImages';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    isBtnActive: false,
    isLoading: false,
    showModal: false,
    modalImage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery.toLowerCase();
    const searchQuery = this.props.searchQuery.toLowerCase();
    if (prevSearchQuery !== searchQuery) {
      this.setState({
        images: [],
        page: 1,
        isBtnActive: false,
        isLoading: true,
      });
      const data = await fetchImages(searchQuery);

      this.setState({
        images: data.hits,
        isBtnActive: data.totalHits > data.hits.length,
        isLoading: false,
      });
    }
    const prevPage = prevState.page;
    const page = this.state.page;
    if (prevPage !== page && page !== 1) {
      this.setState({ isLoading: true });

      const data = await fetchImages(searchQuery, page);
      const newImages = data.hits;

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        isBtnActive:
          data.totalHits > [...prevState.images, ...newImages].length,
        isLoading: false,
      }));
    }
  }
  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = index => {
    const { images } = this.state;
    this.setState({
      showModal: true,
      modalImage: images[index],
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    const { images, isLoading, isBtnActive, showModal, modalImage } =
      this.state;
    return (
      <>
        <Gallery>
          {images &&
            images.map((image, index) => (
              <ImageGalleryItem
                key={image.id}
                image={image}
                handleModal={this.openModal}
                index={index}
              />
            ))}
        </Gallery>
        {isLoading && <Loader />}
        {isBtnActive && <Button onPagination={this.handleClick} />}
        {showModal && (
          <Modal onClose={this.closeModal} modalImage={modalImage} />
        )}
      </>
    );
  }
}
