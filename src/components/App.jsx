import { Component } from 'react';
import { Container } from './Container/Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </Container>
    );
  }
}
