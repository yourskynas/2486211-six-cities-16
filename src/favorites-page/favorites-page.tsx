import { nanoid } from '@reduxjs/toolkit';
import Logo from '../components/logo/logo';
import { CityName, PlaceOfferType } from '../types';
import PlaceCard from '../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';
import { groupByCity } from '../utils';
import EmptyFavorites from '../components/empty-stubs/empty-favorites';
import { useAppSelector } from '../components/hooks';
import { selectIsFavoriteOffersDataLoading, selectIsFavoriteOffersError } from '../store/offers-data/selectors';
import Loading from '../components/empty-stubs/loading';
import Error from '../components/empty-stubs/error';
import { Link } from 'react-router-dom';

type FavoritesProps = {
  favoritesOffers: PlaceOfferType[];
  groupedOffersByCities: Record<CityName, PlaceOfferType[]>;
}

type FavoriteItemProps = {
  city: CityName;
  offers: PlaceOfferType[];
}

const FavoriteItem = ({city, offers}: FavoriteItemProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="#">
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => <PlaceCard key={offer.id} placeOffer={offer} classNameCard={'favorites'} imageWidth='150' imageHeight='110'/>)}
    </div>
  </li>
);

const FavoriteList = ({groupedOffersByCities}: Omit<FavoritesProps, 'favoritesOffers'>): JSX.Element => (
  <ul className="favorites__list">
    {Object.entries(groupedOffersByCities).map(([city, groupedOffersByCity]) => <FavoriteItem key={nanoid()} city={city} offers={groupedOffersByCity} />)}
  </ul>
);

const FavoritesPage = ({favoritesOffers}: Omit<FavoritesProps, 'groupedOffersByCities'>): JSX.Element => {
  const isFavoriteOffersDataLoading = useAppSelector(selectIsFavoriteOffersDataLoading);
  const isFavoriteOffersError = useAppSelector(selectIsFavoriteOffersError);
  const groupedOffersByCities = groupByCity(favoritesOffers);

  if (isFavoriteOffersDataLoading) {
    return <Loading />;
  } else if (isFavoriteOffersError) {
    return <Error />;
  } else {
    return (
      <>
        <Helmet>
          <title>6 cities | Favorites</title>
        </Helmet>
        {favoritesOffers.length > 0 ? (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList groupedOffersByCities={groupedOffersByCities} />
              </section>
            </div>
          </main>
        ) : <EmptyFavorites /> }

        <footer className="footer container">
          <Logo classNameLogo='footer__logo' imageWidth='64' imageHeight='33' />
        </footer>
      </>
    );
  }
};

export default FavoritesPage;
