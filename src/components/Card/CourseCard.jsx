import { OrangeCamera } from 'components/Icons';
import {
  CourseCardContainer,
  CardIconContainer,
  CourseCardInfo,
  CardPreview,
  CourseCardPriceContainer,
  CardPriceTitle,
  CardPriceValue,
  CourseCardTitle,
  CourseVideosNumber,
} from './Card.styles';
const CourseCard = ({ title, price, videosNumber, image }) => {
  return (
    <CourseCardContainer>
      <CardPreview background={image}>
        <CardIconContainer>
          <OrangeCamera />
          <CourseVideosNumber>
            <h1>فيديو</h1>
            <span>{videosNumber}</span>
          </CourseVideosNumber>
        </CardIconContainer>
      </CardPreview>

      <CourseCardInfo>
        <CourseCardTitle>{title}</CourseCardTitle>
        <CourseCardPriceContainer>
          <CardPriceTitle>دينار كويتي </CardPriceTitle>
          <CardPriceValue>{price}</CardPriceValue>
        </CourseCardPriceContainer>
      </CourseCardInfo>
    </CourseCardContainer>
  );
};

export default CourseCard;
