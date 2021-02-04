import { Camera, Mic, Wifi } from 'components/Icons';
import { ExpertisesData } from 'data/data';
import { NavLink } from 'react-router-dom';
import {
  AboutUsExpertiseContainer,
  ExpertiseTitle,
  ExpertisesContainer,
  ExpertisesItem,
} from './AboutUsExpertise.styles';

const AboutUsExpertise = () => {
  return (
    <AboutUsExpertiseContainer>
      <ExpertiseTitle>الخبرات</ExpertiseTitle>
      <ExpertisesContainer>
        {ExpertisesData.map((e, index) => (
          <ExpertisesItem key={index}>{e}</ExpertisesItem>
        ))}
      </ExpertisesContainer>
    </AboutUsExpertiseContainer>
  );
};

export default AboutUsExpertise;
