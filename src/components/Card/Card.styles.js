import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const CardContainer = styled.div`
  width: 175px;
  margin-bottom: 39px;
`;
export const CardInfo = styled.div`
  margin-top: 17px;
  padding: 0 6px 0 3px;
`;

export const CardPreview = styled.div`
  width: 100%;
  height: 196px;

  border-radius: 5px;
  background: linear-gradient(
      315deg,
      rgb(var(--cobalt-two)) 0%,
      rgba(255, 255, 255, 0) 56%
    ),
    url(${(props) => props.background}) no-repeat;
  background-position: center center;
  width: 100%;
  position: relative;
`;
export const CardPreviewBasic = styled.div`
  width: 100%;
  height: 196px;

  border-radius: 5px;
  background: linear-gradient(
      315deg,
      rgb(var(--cobalt-two)) 16%,
      rgba(255, 255, 255, 0) 56%
    ),
    rgb(var(--title-color-blue));
  background-position: center center;
  width: 100%;
  position: relative;
`;

export const CardIconContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & div {
    display: flex;
  }
  & span {
    font-family: 'LoewNextArabic';
    font-size: 1.9rem;
    font-weight: bold;
    color: rgb(var(--blue-grey));
    display: inline-block;
    margin-right: 6px;
    text-transform: uppercase;
  }
`;

const titleStyle = css`
  font-family: 'LoeNextArabicBold';
  text-align: right;

  color: white;
`;

export const CardTitle = styled.h1`
  ${titleStyle}
  font-size: 1.4rem;
  line-height: 1.43;
`;

export const CardMetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
`;

export const CardPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardPriceValue = styled.h1`
  font-family: 'LoewNextArabic';
  font-size: 1.9rem;
  font-weight: bold;
  color: rgb(var(--blue-grey));
  margin-left: 4px;
`;
export const CardPriceTitle = styled.span`
  font-family: 'LoewNextArabic';
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(var(--blue-grey));
`;
export const CardViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardViewsNumber = styled.div`
  font-family: 'LoewNextArabic';
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(var(--blue-grey));
  margin-left: 6px;
`;

// courseCard styles

export const CourseCardContainer = styled.div`
  margin-bottom: 68px;
`;
export const CourseCardInfo = styled.div`
  margin-top: 21px;
  padding: 0 6px 0 3px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const CourseCardTitle = styled.h1`
  ${titleStyle}

  font-size: 1.7rem;
  line-height: 1.59;
  width: 60%;
`;
export const CourseCardPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const CourseVideosNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;

  & span,
  h1 {
    font-family: 'LoewNextArabic';
    font-size: 1.4rem;
    color: white;
    text-align: right;
    font-weight: normal;
    line-height: 1.43;
    opacity: 0.8;
  }
  & h1 {
    margin-right: 2px;
  }
`;
