import { PlaceOfferType } from '../types';
import LocationsList from '../components/locations/locations-list';
import CitiesMap from '../components/map/cities-map';
import PlaceCard from '../components/place-card/place-card';
import PlacesSorting from '../components/places-sorting/places-sorting';
import { Helmet } from 'react-helmet-async';
import EmptyMain from '../components/empty-stubs/empty-main';

type PlaceOffersProps = PlaceOfferType[];

type MainProps = {
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
  onOfferHover: (value: string) => void;
  onCityClick: (value: string) => void;
  currentCity: string;
}

const MainPage = ({ cities, placesOptions, placeOffers, onOfferHover, onCityClick, currentCity}: MainProps): JSX.Element => {

  const groupByCity = placeOffers.reduce((group, offer) => {
    const city = offer.city.name;
    group[city] = group[city] ?? [];
    group[city].push(offer);
    return group;
  }, {});

  const groupedOffersByCity = groupByCity[currentCity];

  return (
    <>
      <Helmet>
        <title>6 cities | Main </title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={cities} onCityClick={onCityClick} currentCity={currentCity}/>
        <div className="cities">
          {groupedOffersByCity
            ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{groupedOffersByCity.length} places to stay in {currentCity}</b>
                  <PlacesSorting placesOptions={placesOptions} />
                  <div className="cities__places-list places__list tabs__content">
                    {groupedOffersByCity.map((offer) => <PlaceCard key={offer.id} placeOffer={offer} classNameCard={'cities'} imageWidth='260' imageHeight='200' onOfferHover={onOfferHover}/>)}
                  </div>
                </section>
                <CitiesMap />
              </div>
            ) : <EmptyMain city={currentCity}/> }
        </div>
      </main>
    </>
  );
};

export default MainPage;
