import { createContext } from 'react';

const WaitingListContext = createContext({
  showList: false,
  toggleWaitingList: () => {},
});

export default WaitingListContext;
