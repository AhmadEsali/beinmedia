import { Bell, RightArrow, LeftArrow, User } from 'components/Icons';
import WaitingListContext from 'contexts/WaitingListContext';
import { useContext } from 'react';
import {
  TopBarContainer,
  TopBarLeftArea,
  ProfileArea,
  WaitingListTitle,
  WaitingListNumber,
  LeftIcon,
  UserIcon,
  UserInfo,
  WelcomeMessage,
  UserName,
  WaitingListTitleMobile,
  WaitingListNumberMobile,
} from './TobBar.styles';

const TopBar = () => {
  const waitingList = useContext(WaitingListContext);

  return (
    <TopBarContainer>
      <TopBarLeftArea>
        {!waitingList.showList ? (
          <>
            <button onClick={() => waitingList.toggleWaitingList()}>
              <WaitingListTitle>قائمة الأنتظار</WaitingListTitle>
            </button>

            <WaitingListNumber>١٤</WaitingListNumber>
            <LeftIcon>
              <button onClick={() => waitingList.toggleWaitingList()}>
                <RightArrow />
              </button>
            </LeftIcon>
          </>
        ) : (
          <>
            <button onClick={() => waitingList.toggleWaitingList()}>
              <WaitingListTitleMobile>قائمة الأنتظار</WaitingListTitleMobile>
            </button>
            <WaitingListNumberMobile>١٤</WaitingListNumberMobile>

            <LeftIcon waitingList={waitingList.showList}>
              <button onClick={() => waitingList.toggleWaitingList()}>
                <LeftArrow />
              </button>
            </LeftIcon>
          </>
        )}
      </TopBarLeftArea>
      <ProfileArea>
        <UserInfo>
          <UserName>مالك محمد</UserName>
          <WelcomeMessage>مرحبآ بك</WelcomeMessage>
        </UserInfo>
        <UserIcon>
          <User />
        </UserIcon>
        <Bell />
      </ProfileArea>
    </TopBarContainer>
  );
};

export default TopBar;
