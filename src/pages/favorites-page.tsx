import { nanoid } from '@reduxjs/toolkit';
import Header from '../components/header/header';
import Logo from '../components/logo/logo';
import { CITIES } from '../constants';
import { PlaceOfferType } from '../types';
import PlaceCard from '../components/place-card/place-card';

type FavoritesProps = {
  placeOffers: PlaceOfferType[];
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
      {offersCity.map((offer) => <PlaceCard key={offer.id} title={offer.title} typeOfHousing={offer.type} previewImage={offer.previewImage} price={offer.price} isFavorite={offer.isFavorite} classNameCard={'favorites'} imageWidth='150' imageHeight='110'/>)}
    </div>
  </li>
);

const FavoriteList = ({placeOffers}: FavoritesProps): JSX.Element => {
  const filteredByCities = CITIES.map((city) => placeOffers.filter((offer) => offer && offer.city.name === city && offer.isFavorite));
  const offersCities = filteredByCities.filter((list) => list.length > 0);
  return (
    <ul className="favorites__list">
      {offersCities.map((offersCity) => <FavoriteItem key={nanoid()} offersCity={offersCity} />)}
    </ul>
  );
};

const FavoritesPage = ({placeOffers}: FavoritesProps): JSX.Element => (
  <div className="page">
    <Header />

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
