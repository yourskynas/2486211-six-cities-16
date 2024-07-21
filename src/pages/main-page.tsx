import { PlaceOfferType } from '../types';
import Header from '../components/header/header';
import LocationsList from '../components/locations/locations-list';
import CitiesMap from '../components/map/cities-map';
import PlaceCard from '../components/place-card/place-card';
import PlacesSorting from '../components/places-sorting/places-sorting';
import { Helmet } from 'react-helmet-async';

type PlaceOffersProps = PlaceOfferType[];

type MainProps = {
  countOffers: number;
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
}

const MainPage = ({countOffers, cities, placesOptions, placeOffers}: MainProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Helmet>
      <title>6 cities | Main </title>
    </Helmet>

    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList cities={cities}/>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{countOffers} places to stay in Amsterdam</b>
            <PlacesSorting placesOptions={placesOptions} />
            <div className="cities__places-list places__list tabs__content">
              {placeOffers.map((offer) => <PlaceCard key={offer.id} title={offer.title} typeOfHousing={offer.type} previewImage={offer.previewImage} price={offer.price} isFavorite={offer.isFavorite} classNameCard={'cities'} imageWidth='260' imageHeight='200'/>)}
            </div>
          </section>
          <CitiesMap />
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
