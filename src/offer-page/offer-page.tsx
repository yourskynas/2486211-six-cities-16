import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferAction } from '../store/api-actions';
import { selectComments, selectCurrentOffer, selectIsOfferDataLoading, selectIsOfferError, selectNearbyOffers } from '../store/offers-data/selectors';
import { selectAuthorizationStatus } from '../store/user-process/selectors';
import { useAppDispatch, useAppSelector } from '../components/hooks';
import NearPlaces from '../components/offer/near-places';
import OfferImages from '../components/offer/offer-images';
import OfferInsideList from '../components/offer/offer-inside-list';
import OfferHost from '../components/offer/offer-host';
import Reviews from '../components/offer/reviews';
import ReviewForm from '../components/offer/review-form';
import CitiesMap from '../components/cities-map/cities-map';
import Error from '../components/empty-stubs/error';
import FavoriteIcon from '../components/favorite-icon/favorite-icon';
import Loading from '../components/empty-stubs/loading';
import NotFoundPage from '../not-found-page/not-found-page';
import { ratingInProcent } from '../utils';
import { AuthorizationStatus } from '../constants';

const OfferPage = (): JSX.Element => {
  const params = useParams();
  const offerId = params.id || '';

  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectIsOfferError);
  const isLoading = useAppSelector(selectIsOfferDataLoading);

  useEffect(() => {
    dispatch(fetchOfferAction(offerId))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(fetchCommentsAction(offerId));
          dispatch(fetchNearbyOffersAction(offerId));
        }
      });
  }, [dispatch, offerId]);

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const currentOffer = useSelector(selectCurrentOffer);
  const reviews = useSelector(selectComments);
  const nearbyOffers = useSelector(selectNearbyOffers);
  const slicedNearbyOffers = nearbyOffers && nearbyOffers.slice(0, 3);
  const offersForMap = currentOffer && slicedNearbyOffers?.concat(currentOffer);

  if (isError) {
    return <Error />;
  } else if (isLoading) {
    return <Loading />;
  }

  return (currentOffer !== null) ?
    <>
      <Helmet>
        <title>6 cities | Offer </title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferImages images={currentOffer.images}/>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isFavorite && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <FavoriteIcon nameIcon='offer' widthIcon='31' heightIcon='33' isFavorite={currentOffer.isFavorite} id={currentOffer.id} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: ratingInProcent(currentOffer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={currentOffer.goods}/>
              </div>
              <OfferHost description={currentOffer.description} host={currentOffer.host} />
              <section className="offer__reviews reviews">
                {reviews && <Reviews reviews={reviews} />}
                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm offerId={offerId} /> : ''}
              </section>
            </div>
          </div>
          <CitiesMap locationCity={currentOffer.city.location} offers={offersForMap} activeOffer={offerId} classNameMap={'offer'} />
        </section>
        <div className="container">
          {slicedNearbyOffers && <NearPlaces placeOffers={slicedNearbyOffers} />}
        </div>
      </main>
    </>
    : <NotFoundPage /> ;
};

export default OfferPage;
