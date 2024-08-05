import { Link } from 'react-router-dom';
import { PlaceOfferType } from '../../types';
import { ratingInProcent } from '../../utils';
import { AppRoute } from '../../constants';

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
  const {title, type: typeOfHousing, price, previewImage, isFavorite, rating, isPremium} = placeOffer;
  const ratingStars = ratingInProcent(rating);
  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

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
        <Link to={`${AppRoute.OFFER}${placeOffer.id}`}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref ="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{typeOfHousing}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
