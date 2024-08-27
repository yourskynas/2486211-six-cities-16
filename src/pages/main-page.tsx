import { CityName, PlaceOfferType } from '../types';
import LocationsList from '../components/locations/locations-list';
import PlaceCard from '../components/place-card/place-card';
import PlacesSorting from '../components/places-sorting/places-sorting';
import { Helmet } from 'react-helmet-async';
import EmptyMain from '../components/empty-stubs/empty-main';
import CitiesMap from '../components/map/cities-map';
import { useState } from 'react';
import { useAppSelector } from '../components/hooks';
import { sortingPlaces } from '../utils';
import Loading from '../components/empty-stubs/loading';
import Error from '../components/empty-stubs/error';
import { selectCity, selectError, selectSortingStatus } from '../store/main-process/selectors';
import { selectIsOffersDataLoading } from '../store/offers-data/selectors';

type MainProps = {
  cities: string[];
  groupedOffersByCities: Record<CityName, PlaceOfferType[]>;
}

const MainPage = ({ cities, groupedOffersByCities}: MainProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState('');

  const sortingStatus = useAppSelector(selectSortingStatus);
  const currentCity = useAppSelector(selectCity);
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);
  const error = useAppSelector(selectError);

  const handleArticleMouseEnter = (value: string) => {
    setActiveOffer(value);
  };

  const sortOffers = (offers: PlaceOfferType[]): PlaceOfferType[] => sortingStatus && sortingPlaces[sortingStatus](offers);

  const groupedOffersByCity = sortOffers(groupedOffersByCities[currentCity]);

  const getLocationCurrentCity = () => groupedOffersByCity && groupedOffersByCity[0].city.location;

  const locationCurrentCity = getLocationCurrentCity();

  const classNameMainElement = groupedOffersByCity ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty';

  if (isOffersDataLoading) {
    return <Loading />;
  } else if (error && error !== 'Header Token is not correct') {
    return <Error />;
  } else {
    return (
      <>
        <Helmet>
          <title>6 cities | Main </title>
        </Helmet>

        <main className={classNameMainElement}>
          <h1 className="visually-hidden">Cities</h1>
          <LocationsList cities={cities} currentCity={currentCity}/>
          <div className="cities">
            {groupedOffersByCity
              ? (
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{groupedOffersByCity.length} places to stay in {currentCity}</b>
                    <PlacesSorting />
                    <div className="cities__places-list places__list tabs__content">
                      {groupedOffersByCity.map((offer) => <PlaceCard key={offer.id} placeOffer={offer} classNameCard={'cities'} imageWidth='260' imageHeight='200' onOfferHover={handleArticleMouseEnter}/>)}
                    </div>
                  </section>
                  <CitiesMap locationCity={locationCurrentCity} offers={groupedOffersByCity} activeOffer={activeOffer} classNameMap={'cities'} />
                </div>
              ) : <EmptyMain city={currentCity} /> }
          </div>
        </main>
      </>
    );
  }
};

export default MainPage;
