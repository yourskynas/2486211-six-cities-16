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

type PlaceOffersProps = PlaceOfferType[];

type AppProps = {
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
  offer: OfferType;
  reviews: ReviewType[];
}

const App = ({cities, placesOptions, placeOffers, offer, reviews}: AppProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MAIN}
          element={
            <MainPage
              cities={cities}
              placesOptions={placesOptions}
              placeOffers={placeOffers}
            />
          }
        />
        <Route
          path={AppRoute.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.OFFER}
          element={<OfferPage offer={offer} placeOffers={placeOffers} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NO_AUTH} >
              <FavoritesPage placeOffers={placeOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
