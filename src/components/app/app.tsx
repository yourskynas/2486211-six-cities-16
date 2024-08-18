import { OfferType, ReviewType } from '../../types';
import MainPage from '../../pages/main-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import TemplatePage from '../../pages/template-page';
import { useAppSelector } from '../hooks';
import { groupByCity } from '../../utils';
import { selectIsOffersDataLoading, selectOffers } from '../../store/selectors';

type AppProps = {
  cities: string[];
  offer: OfferType;
  reviews: ReviewType[];
  authorizationStatus: keyof typeof AuthorizationStatus;
}

const App = ({cities, offer, reviews, authorizationStatus}: AppProps): JSX.Element => {
  const offers = useAppSelector(selectOffers);
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TemplatePage authorizationStatus={authorizationStatus} />}>
            <Route index element={<Navigate to={AppRoute.DEFAULT_MAIN} />} />
            {CITIES.map((city) => (
              <Route path={`city/${city.toLowerCase()}`}
                key={city} element={
                  <MainPage
                    cities={cities}
                    groupedOffersByCities={groupByCity(offers)}
                  />
                }
              />
            ))}
            <Route
              path={AppRoute.OFFER}
              element={
                <OfferPage
                  offer={offer}
                  placeOffers={offers}
                  reviews={reviews}
                  authorizationStatus={authorizationStatus}
                />
              }
            />
            <Route
              path={AppRoute.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} >
                  <FavoritesPage groupedOffersByCities={groupByCity(offers, true)} />
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
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
