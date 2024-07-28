import { Helmet } from 'react-helmet-async';
import Header from '../components/header/header';
import OfferImages from '../components/offer/offer-images';
import OfferInsideList from '../components/offer/offer-inside-list';
import { OfferType, PlaceOfferType, ReviewType } from '../types';
import NearPlaces from '../components/offer/near-places';
import { ratingInProcent } from '../utils';
import OfferHost from '../components/offer/offer-host';
import Reviews from '../components/offer/reviews';
import ReviewForm from '../components/offer/review-form';
import { AuthorizationStatus } from '../constants';

type OfferProps = {
  offer: OfferType;
  placeOffers: PlaceOfferType[];
  reviews: ReviewType[];
  authorizationStatus: keyof typeof AuthorizationStatus;
}

const OfferPage = ({offer, placeOffers, reviews, authorizationStatus}: OfferProps): JSX.Element => {
  const {type, title, description, price, isFavorite, images, rating, bedrooms, maxAdults, goods, host} = offer;
  const ratingStars = ratingInProcent(rating);
  return (
    <div className="page">
      <Helmet>
        <title>6 cities | Offer </title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferImages images={images}/>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isFavorite && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: ratingStars}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={goods}/>
              </div>
              <OfferHost description={description} host={host} />
              <section className="offer__reviews reviews">
                {reviews.length > 0 ? <Reviews reviews={reviews} /> : ''}
                {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewForm /> : ''}
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <NearPlaces placeOffers={placeOffers} />
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
