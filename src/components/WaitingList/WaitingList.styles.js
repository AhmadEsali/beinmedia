import styled from 'styled-components/macro';
import { mediaMax } from 'styles/utils';

export const WaitingListContainer = styled.div`
  width: 20%;
  position: absolute;
  ${mediaMax('large')} {
    right: 0;
    width: 50%;
    z-index: 43334;
  }
`;

export const WaitingListTitle = styled.h1`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 2rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.75;
  letter-spacing: normal;
  color: rgb(var(--title-color-blue));
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 37px;
    color: black;
    background-color: rgb(var(--blue-light-two));
    bottom: 0;
    right: 26%;
  }
  ${mediaMax('large')} {
    display: none;
  }
`;
export const WaitingListUsers = styled.div`
  margin-top: 45px;
`;
export const WaitingListUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 85%;
  padding: 13px 50px 13px;

  &:not(:first-child) {
    margin-top: 35px;
  }
  ${mediaMax('large')} {
    width: 100%;
  }
`;
export const WaitingListActiveUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  background: #f5f5f5;
  width: 85%;
  padding: 13px 50px 13px;

  height: 84px;
  &:not(:first-child) {
    margin-top: 35px;
  }

  ${mediaMax('large')} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    width: 100%;
  }
`;

export const WaitingListUserIcon = styled.div`
  width: 58px;
  height: 58px;
  margin-left: 11px;
  object-fit: contain;
  box-shadow: -2px 2px 5px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #e9edf0;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WaitingListUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 11px;
`;
export const WaitingListUserDate = styled.div`
  font-family: 'LoewNextArabic';
  font-size: 1.1rem;
  color: rgb(var(--blue-light-three));
  text-align: right;
`;
export const WaitingListUserName = styled.div`
  font-family: 'LoewNextArabic';
  font-size: 1.6rem;
  font-weight: bold;

  text-align: right;
  color: rgb(var(--dark-slate-blue-two));
  margin-top: 9px;
`;

export const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: auto;
  padding: 13px 15px 13px;

  ${mediaMax('large')} {
    display: none;
  }
`;
export const CopyRightText = styled.div`
  & h1 {
    font-family: 'LoewNextArabic';
    font-size: 1.6rem;
    text-align: right;
    color: #889dc7;
    font-weight: normal;
    line-height: 1.81;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  & > div:not(last-child) {
    margin-left: 18px;
  }
`;
