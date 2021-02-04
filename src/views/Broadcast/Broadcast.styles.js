import styled from 'styled-components/macro';

export const BroadcastContainer = styled.section`
  margin: 50px 66px 0;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: 2fr 1fr;
  grid-gap: 38px;
`;
export const ItemPreviewContainer = styled.div``;
export const BroadcastItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;
`;
