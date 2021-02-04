import { Bell } from 'components/Icons';
import { useContext } from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import { MainContainer } from './Main.styles';
import TobBar from 'components/TopBar';
import WaitingListContext from 'contexts/WaitingListContext';
import WaitingList from 'components/WaitingList/WaitingList';

const Main = ({ children }) => {
  const waitingList = useContext(WaitingListContext);

  return (
    <>
      <TobBar />
      {waitingList.showList && <WaitingList />}
      <MainContainer waitingList={waitingList.showList}>
        <HeaderContainer />
        {children}
      </MainContainer>
    </>
  );
};

export default Main;
