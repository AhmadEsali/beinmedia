import Main from 'layouts/main/Main';
import AboutUsInfo from 'components/AboutUsInfo';
import AboutUsVideo from 'components/AboutUsVideo';
import AboutUsExpertise from 'components/AboutUsExpertise';

import {
  HomeContainer,
  VideoContainer,
  AboutUsInfoContainer,
} from './Home.styles';

const Home = () => {
  return (
    <Main>
      <HomeContainer>
        <VideoContainer>
          <AboutUsVideo />
        </VideoContainer>
        <AboutUsInfoContainer>
          <AboutUsInfo />
          <AboutUsExpertise />
        </AboutUsInfoContainer>
      </HomeContainer>
    </Main>
  );
};

export default Home;
