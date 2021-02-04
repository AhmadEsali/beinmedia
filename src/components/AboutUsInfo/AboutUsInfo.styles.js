import styled from 'styled-components/macro';

export const AboutUsInfoContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 5px 86px 0 rgba(0, 0, 0, 0.05);
  background-color: rgb(var(--light-navy-blue));
  padding: 45px 28px 45px 57px;
`;

export const AboutUsText = styled.p`
  font-family: 'LoewNextArabic';
  font-size: 2rem;
  line-height: 1.7;
  text-align: right;
  color: white;
  height: 328px;
  overflow-y: scroll;
  padding-right: 25px;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(var(--dusk-blue));
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(var(--denim-blue));
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ServiceItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    margin-left: 49px;
  }
`;
export const ServiceIcon = styled.div`
  margin-left: 17px;
  /* width: 52px; */
  width: 52px;
  height: 52px;
  padding: 19px 14px 18.6px 14px;
  object-fit: contain;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 16%);
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.camera {
    border: solid 3px #e21956;
  }
  &.mic {
    border: solid 3px #1dd950;
  }
  &.wifi {
    border: solid 3px #e28519;
  }
`;
export const ServiceInfo = styled.div``;
export const ServiceName = styled.h1`
  font-family: 'LoeNextArabicBold';
  text-align: right;
  font-size: 1.6rem;
  color: white;
`;
export const ServiceStatus = styled.h1`
  font-family: 'LoeNextArabicMedium';
  font-size: 1.4rem;
  color: rgb(var(--blue-light-two));
  text-align: right;
  font-weight: 500;
`;
