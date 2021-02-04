import { Home, StarFill, StarEmpty } from 'components/Icons';
import DoctorImage from 'assets/images/doctor.png';

import {
  BannerContainer,
  LogoArea,
  Logo,
  BannerRight,
  DoctorArea,
  DoctorInfo,
  DoctorProfileImage,
  ClinicName,
  DoctorName,
  DoctorReview,
  StarsContainer,
  DoctorStatus,
} from './Banner.styles';
import LogoImage from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

import { useContext } from 'react';

import WaitingListContext from 'contexts/WaitingListContext';

const Banner = () => {
  const waitingList = useContext(WaitingListContext);

  return (
    <BannerContainer waitingList={waitingList}>
      <LogoArea>
        <Logo src={LogoImage} alt='logo' />
      </LogoArea>
      <BannerRight>
        <DoctorStatus>مشغول بإستشارة</DoctorStatus>
        <DoctorArea>
          <DoctorInfo>
            <ClinicName>العيادة الرقمية</ClinicName>
            <DoctorName>لـ د. هند الناهض</DoctorName>
            <DoctorReview>
              <span>تقييم</span>
              <StarsContainer>
                <StarEmpty />
                <StarFill />
                <StarFill />
                <StarFill />
              </StarsContainer>
            </DoctorReview>
          </DoctorInfo>
        </DoctorArea>
        <DoctorProfileImage src={DoctorImage} alt='doctor image' />
        <Link to='/'>
          <Home />
        </Link>
      </BannerRight>
    </BannerContainer>
  );
};

export default Banner;
