import { nanoid } from '@reduxjs/toolkit';
import Header from '../components/header/header';
import Logo from '../components/logo/logo';
import { AuthorizationStatus, CITIES } from '../constants';
import { PlaceOfferType } from '../types';
import PlaceCard from '../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';

type FavoritesProps = {
  placeOffers: PlaceOfferType[];
  authorizationStatus: keyof typeof AuthorizationStatus;
}

type FavoriteItemProps = {
  offersCity: PlaceOfferType[];
}

const FavoriteItem = ({offersCity}: FavoriteItemProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{offersCity[0].city.name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offersCity.map((offer) => <PlaceCard key={offer.id} placeOffer={offer} classNameCard={'favorites'} imageWidth='150' imageHeight='110'/>)}
    </div>
  </li>
);

const FavoriteList = ({placeOffers}: FavoritesProps): JSX.Element => {
  // реализовать в следующем ПР =>
  // const groupByCity = placeOffers.reduce((group, offer) => {
  //   const city = offer.city.name;
  //   group[city] = group[city] ?? [];

  //   if (offer && offer.isFavorite) {
  //     group[city].push(offer);
  //   }
  //   return group;
  // }, {});

  const filteredByCities = CITIES.map((city) => placeOffers.filter((offer) => offer && offer.city.name === city && offer.isFavorite));
  const offersCities = filteredByCities.filter((list) => list.length > 0);
  return (
    <ul className="favorites__list">
      {offersCities.map((offersCity) => <FavoriteItem key={nanoid()} offersCity={offersCity} />)}
    </ul>
  );
};

const FavoritesPage = ({placeOffers, authorizationStatus}: FavoritesProps): JSX.Element => (
  <div className="page">
    <Helmet>
      <title>6 cities | Favorites</title>
    </Helmet>
    <Header authorizationStatus={authorizationStatus}/>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList placeOffers={placeOffers}/>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Logo classNameLogo='footer__logo' imageWidth='64' imageHeight='33' />
    </footer>
  </div>
);

export default FavoritesPage;
