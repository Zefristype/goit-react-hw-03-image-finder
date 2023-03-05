import { createPortal } from 'react-dom';
import { Component } from 'react';
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
