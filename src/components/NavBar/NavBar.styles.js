import styled from 'styled-components/macro';
import { mediaMax, mediaMin } from 'styles/utils';

export const NavBarContainer = styled.div`
  max-width: 100%;
  height: 92px;
  background-image: linear-gradient(
    80deg,
    rgb(var(--dark-slate-blue)) 11%,
    rgb(var(--dark-slate-blue-two)) 95%
  );
  padding: 19px 66px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NavLinksContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;
export const NavLinkItem = styled.div`
  font-family: 'LoewNextArabic';
  font-size: 1.8rem;
  font-weight: 500;
  color: rgb(var(--blue-grey));

  &:not(:last-child) {
    margin-left: 40px;
  }
  & a.active {
    font-family: 'LoewNextArabicExtraBold';
    color: white;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 25px;
      border: solid 1px #ffffff;

      background-color: white;
      color: white;
      bottom: -11px;

      right: 0;
    }
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
  margin-bottom: 7px;
`;
export const ServiceStatus = styled.h1`
  font-family: 'LoeNextArabicMedium';
  font-size: 1.4rem;
  color: rgb(var(--blue-light-two));
  text-align: right;
  font-weight: 500;
`;

export const NavProfileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(var(--blue-white));
  border: 3px solid rgb(var(--blue-light));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 51px;
  & > div {
    height: 27px;
    width: 27px;
  }
`;
export const UserInfo = styled.div`
  color: rgb(var(--dark-slate-blue-two));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
export const WelcomeMessage = styled.span`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 1.6rem;
`;
export const UserName = styled.h1`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 1.9rem;
  margin-right: 7px;
`;
