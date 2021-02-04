import styled from 'styled-components/macro';
import { mediaMax } from 'styles/utils';

export const MainContainer = styled.main`
  width: ${(props) => (props.waitingList ? '79%' : '100%')};
  height: auto;
  box-shadow: -32px 60px 33px 0 rgba(29, 66, 139, 0.51);
  background-color: rgba(var(--dark-blue), 0.97);
  padding-bottom: 50px;
  margin-left: ${(props) => props.waitingList && 'auto'};
  border-top-left-radius: ${(props) => props.waitingList && '33px'};
  ${mediaMax('large')} {
    width: ${(props) => (props.waitingList ? '50%' : '100%')};

    margin-right: ${(props) => props.waitingList && 'auto'};
    border-top-right-radius: ${(props) => props.waitingList && '33px'};
    border-top-left-radius: 0;
    margin-left: 0;
  }
`;
