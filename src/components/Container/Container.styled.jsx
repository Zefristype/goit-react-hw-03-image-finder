import styled from 'styled-components';
import { Container as Layout } from './Container';

export const Container= styled(Layout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
