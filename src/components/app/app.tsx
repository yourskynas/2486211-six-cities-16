import { OfferType, PlaceOfferType, ReviewType } from '../../types';
import MainPage from '../../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import TemplatePage from '../../pages/template-page';

type PlaceOffersProps = PlaceOfferType[];

type AppProps = {
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
  offer: OfferType;
  reviews: ReviewType[];
  authorizationStatus: keyof typeof AuthorizationStatus;
}

const App = ({cities, placesOptions, placeOffers, offer, reviews, authorizationStatus}: AppProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState('');
  const [currentCity, setCurrentCity] = useState('Paris');

  const handleArticleMouseEnter = (value: string) => {
    setActiveOffer(value);
  };

  const handleCityLinkClick = (value: string) => {
    setCurrentCity(value);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TemplatePage authorizationStatus={authorizationStatus} />}>
            <Route
              index
              path={AppRoute.MAIN(currentCity)}
              element={
                <MainPage
                  cities={cities}
                  placesOptions={placesOptions}
                  placeOffers={placeOffers}
                  onOfferHover={handleArticleMouseEnter}
                  onCityClick={handleCityLinkClick}
                  currentCity={currentCity}
                />
              }
            />
            <Route
              path={AppRoute.OFFER(activeOffer)}
              element={
                <OfferPage
                  offer={offer}
                  placeOffers={placeOffers}
                  reviews={reviews}
                  authorizationStatus={authorizationStatus}
                />
              }
            />
            <Route
              path={AppRoute.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} >
                  <FavoritesPage placeOffers={placeOffers} />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path={AppRoute.LOGIN}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage city={currentCity}/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
