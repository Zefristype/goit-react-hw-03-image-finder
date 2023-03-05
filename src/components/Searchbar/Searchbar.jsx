import { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, Form, SearchBtn, LabelBtn, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = this.state.searchQuery.trim();
    if (!searchQuery) {
      return;
    }
    this.props.onSubmit(searchQuery);
  };
  handleChange = e => {
    const searchQuery = e.currentTarget.value;
    this.setState({
      searchQuery: searchQuery,
    });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <AiOutlineSearch size={25} />
            <LabelBtn>Search</LabelBtn>
          </SearchBtn>

          <Input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
