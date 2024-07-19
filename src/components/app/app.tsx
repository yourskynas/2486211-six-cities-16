import { OfferType, PlaceOfferType } from '../../types';
import MainPage from '../../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';

type PlaceOffersProps = PlaceOfferType[];

type AppProps = {
  countOffers: number;
  cities: string[];
  placesOptions: string[];
  placeOffers: PlaceOffersProps;
  offer: OfferType;
}

const App = ({countOffers, cities, placesOptions, placeOffers, offer}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.MAIN}
        element={
          <MainPage
            countOffers={countOffers}
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
        element={<OfferPage offer={offer}/>}
      />
      <Route
        path={AppRoute.FAVORITES}
        element={<FavoritesPage placeOffers={placeOffers} />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
