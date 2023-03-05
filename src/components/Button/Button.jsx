import { LoadMoreBtn, Container } from './Button.styled';

export const Button = ({ onPagination }) => {
  return (
    <Container>
      <LoadMoreBtn onClick={onPagination}>Load more</LoadMoreBtn>
    </Container>
  );
};
