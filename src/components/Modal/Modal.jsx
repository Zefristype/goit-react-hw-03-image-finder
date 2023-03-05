import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.onBackDropClick}>
        <ModalContainer>
          <img
            src={this.props.modalImage.largeImageURL}
            alt={this.props.modalImage.tags}
          />
        </ModalContainer>
      </Overlay>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
