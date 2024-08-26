import { generatePath, Link } from 'react-router-dom';
import { PlaceOfferType } from '../../types';
import { ratingInProcent } from '../../utils';
import { AppRoute } from '../../constants';
import FavoriteIcon from '../favorite-icon/favorite-icon';

type PlaceOffersProps = {
  placeOffer: PlaceOfferType;
  classNameCard: string;
  imageWidth: string;
  imageHeight: string;
  onOfferHover?: (value: string) => void;
}

const PremiumMark = (): JSX.Element => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

const PlaceCard = ({placeOffer, classNameCard, imageWidth, imageHeight, onOfferHover}: PlaceOffersProps): JSX.Element => {
  const {title, type: typeOfHousing, price, previewImage, rating, isPremium} = placeOffer;
  const ratingStars = ratingInProcent(rating);

  const PlaceCardStyle = {
    FOR_ARTICLE: `${classNameCard }__card place-card`,
    FOR_DIV: `${classNameCard }__image-wrapper place-card__image-wrapper`
  };

  const handleCardMouseEnter = (id: string): void => {
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleCardMouseLeave = (): void => {
    if (onOfferHover) {
      onOfferHover('');
    }
  };

  return (
    <article className={PlaceCardStyle.FOR_ARTICLE} onMouseLeave={() => handleCardMouseLeave()} onMouseEnter={() => handleCardMouseEnter(placeOffer.id)}>
      {isPremium ? <PremiumMark /> : ''}
      <div className={PlaceCardStyle.FOR_DIV}>
        <Link to={generatePath(AppRoute.OFFER, { id: placeOffer.id })}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteIcon nameIcon='place-card' widthIcon='18' heightIcon='19' />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.OFFER, { id: placeOffer.id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeOfHousing}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
