import styled from 'styled-components/macro';
import DoctorImage from 'assets/images/hend.png';
import OverLay from 'assets/images/overlay.png';

export const AboutUsVideoContainer = styled.div`
  height: 100%;
  box-shadow: 0 5px 86px 0 rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const AboutUsVideoSource = styled.div`
  border-radius: 5px;
  background: linear-gradient(
      315deg,
      rgb(var(--cobalt-two)) 16%,
      rgba(255, 255, 255, 0) 56%
    ),
    url(${DoctorImage}) no-repeat;
  background-position: center center;
  width: 100%;
  height: 615.7px;
`;

export const VideoTittle = styled.h1`
  font-family: LoeNextArabicMedium;
  font-size: 2.9rem;
  font-weight: 500;
  line-height: 1.55;
  text-align: right;
  color: white;
  position: absolute;
  bottom: 15%;
  right: 45px;
  width: 240px;
`;
