import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { mediaMax } from 'styles/utils';

export const TopBarContainer = styled.div`
  width: 100%;
  height: 93px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 66px;
`;

export const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaMax('large')} {
    display: none;
  }
`;
export const TopBarLeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaMax('large')} {
    margin-left: auto;
  }
`;

const sharedFont = css`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 2rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.75;
  letter-spacing: normal;
  color: rgb(var(--title-color-blue));
`;

export const WaitingListTitle = styled.h1`
  ${sharedFont}

  margin-right: 12px;
`;
export const WaitingListNumber = styled.span`
  ${sharedFont}
`;

export const WaitingListTitleMobile = styled.h1`
  display: none;
  ${sharedFont}

  margin-right: 12px;
  ${mediaMax('large')} {
    display: block;
  }
`;
export const WaitingListNumberMobile = styled.span`
  display: none;
  ${mediaMax('large')} {
    display: block;
  }
  ${sharedFont}
`;

export const LeftIcon = styled.div`
  margin: ${(props) => (props.waitingList ? '' : '4px 0 0 20px')};
  margin-left: ${(props) => (props.waitingList ? '20%' : '')};
  & button {
    cursor: pointer;
  }

  ${mediaMax('large')} {
    display: none;
  }
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
