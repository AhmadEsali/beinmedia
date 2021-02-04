import { WhiteCamera, File } from 'components/Icons';
import Views from 'assets/images/views.png';
import {
  CardContainer,
  CardPreview,
  CardInfo,
  CardTitle,
  CardPriceContainer,
  CardPriceValue,
  CardPriceTitle,
  CardViewsContainer,
  CardViewsNumber,
  CardMetaData,
  CardIconContainer,
  CardPreviewBasic,
} from './Card.styles';

const Card = ({ title, viewsNumber, price, type, cardIcon, image }) => {
  return (
    <CardContainer>
      {type !== 'video' ? (
        <CardPreviewBasic type='video'>
          <CardIconContainer>
            <span>{type}</span>
            <File />
          </CardIconContainer>
        </CardPreviewBasic>
      ) : (
        <CardPreview background={image} type='video'>
          <CardIconContainer>
            <WhiteCamera />
          </CardIconContainer>
        </CardPreview>
      )}
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardMetaData>
          <CardViewsContainer>
            <img src={Views} alt='views' />
            <CardViewsNumber>{viewsNumber}</CardViewsNumber>
          </CardViewsContainer>
          <CardPriceContainer>
            <CardPriceTitle>دينار كويتي </CardPriceTitle>
            <CardPriceValue>{price}</CardPriceValue>
          </CardPriceContainer>
        </CardMetaData>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
