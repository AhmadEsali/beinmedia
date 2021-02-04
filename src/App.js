import { useState } from 'react';
import WaitingListContext from 'contexts/WaitingListContext';
import Routes from 'routes';
import { GlobalStyles } from 'styles/GlobalStyles';
function App() {
  const [showList, setShowList] = useState(false);

  const toggleWaitingList = () => {
    setShowList(!showList);
  };
  return (
    <>
      <GlobalStyles />
      <WaitingListContext.Provider value={{ showList, toggleWaitingList }}>
        <Routes />
      </WaitingListContext.Provider>
    </>
  );
}

export default App;
