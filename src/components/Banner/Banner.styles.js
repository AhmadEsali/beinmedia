import styled from 'styled-components/macro';
import { mediaMax } from 'styles/utils';

export const BannerContainer = styled.div`
  width: 100%;
  height: 183px;
  background-color: rgb(var(--dark-slate-blue-three));
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 66px;
  border-top-left-radius: ${(props) => props.waitingList && '33px'};

  ${mediaMax('large')} {
    border-top-right-radius: ${(props) => props.waitingList && '33px'};
    border-top-left-radius: 0;
  }
`;

export const LogoArea = styled.div`
  width: 248px;
`;
export const Logo = styled.img``;
export const BannerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DoctorArea = styled.div`
  margin-right: 14px;
`;
export const DoctorInfo = styled.div``;
export const DoctorProfileImage = styled.img`
  margin-right: 20px;
  max-width: 79px;
`;
export const ClinicName = styled.h1`
  font-family: 'LoewNextArabicExtraBold';
  font-size: 1.8rem;
  color: white;
  text-align: right;
  margin-bottom: 12px;
`;
export const DoctorName = styled.h1`
  font-family: 'LoeNextArabicBold';
  color: rgb(var(--blue-light-two));
  font-size: 2rem;
  margin-bottom: 12px;
`;
export const DoctorReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    font-family: 'LoewNextArabic';
    font-size: 1.3rem;
    color: rgb(var(--blue-light-two));
    margin-right: 8px;
  }
`;
export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-left: 2.3px;
  }
`;

export const DoctorStatus = styled.div`
  font-family: 'LoeNextArabicBold';
  font-size: 1.3rem;
  padding: 9px 14px 8px;
  color: white;

  background: rgb(var(--orange-dark));
  background: linear-gradient(
    121deg,
    rgb(var(--orange-dark)) -28%,
    rgb(var(--orange-dark)) -21%,
    rgb(var(--orange-light)) 55%,
    rgb(var(--orange-light)) 75%
  );
  border-radius: 16px;
  margin-right: 18px;
`;
