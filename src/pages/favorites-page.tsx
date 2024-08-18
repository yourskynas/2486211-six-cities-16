import { nanoid } from '@reduxjs/toolkit';
import Logo from '../components/logo/logo';
import { CityName, PlaceOfferType } from '../types';
import PlaceCard from '../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';
import { groupByCity } from '../utils';
import EmptyFavorites from '../components/empty-stubs/empty-favorites';

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
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
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
  const groupedOffersByCities = groupByCity(favoritesOffers);
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
};

export default FavoritesPage;
