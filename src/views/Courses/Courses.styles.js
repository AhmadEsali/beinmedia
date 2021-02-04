import styled from 'styled-components/macro';
import { mediaMax } from 'styles/utils';

export const CoursesContainer = styled.section`
  margin: 50px 66px 0;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
  ${mediaMax('medium')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaMax('small')} {
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`;
